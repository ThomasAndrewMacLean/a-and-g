import React from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Img from 'gatsby-image';
import Layout from '../components/layout';

const TekeningenPage = ({ data, location }) => {
    console.log(data);
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    return (
        <Layout location={location}>
            <Masonry className="showcase">
                <div className="showcase__item">
                    <h1>{data.datoCmsTekeningen.titel}</h1>
                </div>
                {shuffle(data.datoCmsTekeningen.tekeningen).map(tekening => (
                    <div key={tekening.filename} className="showcase__item">
                        <figure className="card">
                            <Img fluid={tekening.fluid} />
                        </figure>
                    </div>
                ))}
            </Masonry>
        </Layout>
    );
};

export default TekeningenPage;

export const query = graphql`
    query TekeningenQuery {
        datoCmsTekeningen {
            titel
            uitlegNode {
                childMarkdownRemark {
                    html
                }
            }
            tekeningen {
                filename
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
`;