import React from 'react';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const WorkshopsPage = ({ data }) => {
    console.log(data);
    return (
        <Layout>
            <Masonry className="showcase">
                {/* <div className="showcase__item">
                    <div
                        className="intro"
                        dangerouslySetInnerHTML={{
                            __html:
                                data.datoCmsHome.introTextNode
                                    .childMarkdownRemark.html
                        }}
                    ></div>
                </div> */}
                {data.allDatoCmsWorkshop.edges.map(({ node: work }) => (
                    <div key={work.id} className="showcase__item">
                        <figure className="card">
                            <Link
                                to={`/workshops/${work.titel}`}
                                className="card__image"
                            >
                                <Img fluid={work.afbeelding.fluid} />
                            </Link>
                            <figcaption className="card__caption">
                                <h6 className="card__title">{work.titel}</h6>
                                <div className="card__description">
                                    <p>{work.ondertitel}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                ))}
            </Masonry>
        </Layout>
    );
};

export default WorkshopsPage;

export const query = graphql`
    query WorkshopsQuery {
        allDatoCmsWorkshop {
            edges {
                node {
                    id
                    ondertitel
                    titel
                    afbeelding {
                        url
                        fluid(
                            maxWidth: 300
                            imgixParams: { fm: "jpg", auto: "compress" }
                        ) {
                            ...GatsbyDatoCmsSizes
                        }
                    }
                }
            }
        }
    }
`;
