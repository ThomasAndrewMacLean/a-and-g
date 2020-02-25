import React from 'react';
import { Link, graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const TekeningenPage = ({ data, location }) => {
    console.log(data);
    return (
        <Layout location={location}>
            <Masonry className="showcase">
                <div className="showcase__item">
                    <div
                        className="intro"
                        dangerouslySetInnerHTML={{
                            __html:
                                data.datoCmsHome.introTextNode
                                    .childMarkdownRemark.html
                        }}
                    ></div>
                </div>
                {/* {data.allDatoCmsHome.edges.map(({ node: work }) => (
                    <div key={work.id} className="showcase__item">
                        <figure className="card">
                            <Link
                                to={`/works/${work.slug}`}
                                className="card__image"
                            >
                                <Img fluid={work.coverImage.fluid} />
                            </Link>
                            <figcaption className="card__caption">
                                <h6 className="card__title">
                                    <Link to={`/works/${work.slug}`}>
                                        {work.title}
                                    </Link>
                                </h6>
                                <div className="card__description">
                                    <p>{work.excerpt}</p>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                ))} */}
            </Masonry>
        </Layout>
    );
};

export default TekeningenPage;

export const query = graphql`
    query TekeningenQuery {
        datoCmsHome {
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
                childMarkdownRemark {
                    html
                }
            }
            copyright
            address {
                latitude
                longitude
            }
            addressText
        }
    }
`;
