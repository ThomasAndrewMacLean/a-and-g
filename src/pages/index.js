import React, { useState, useEffect } from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import Masonry from 'react-masonry-component';
import Layout from '../components/layout';

const IndexPage = ({ data, location }) => {
    console.log(data);

    const getAfbeelding = () => {
        return data.datoCmsTekeningen.tekeningen[
            Math.floor(Math.random() * data.datoCmsTekeningen.tekeningen.length)
        ];
    };
    const [afbeelding, setAfbeelding] = useState(getAfbeelding());

    useEffect(() => {
        // setInterval(() => {
        //     setAfbeelding(getAfbeelding());
        // }, 8000);
    }, []);

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

                <div className="showcase__item">
                    <figure className="card">
                        <Link to={`/tekeningen/`} className="card__image">
                            <Img fluid={getAfbeelding().fluid} />
                            <figcaption className="card__caption">
                                <h6 className="card__title">
                                    We zijn verliefd op tekenen ➡ bekijk alles:
                                </h6>
                            </figcaption>
                        </Link>
                    </figure>
                </div>

                <div className="showcase__item">
                    <figure className="card">
                        <Img fluid={getAfbeelding().fluid} />
                    </figure>
                </div>

                <div className="showcase__item">
                    <figure className="card">
                        <Link to={`/workshops/`} className="card__image">
                            <Img fluid={afbeelding.fluid} />
                            <figcaption className="card__caption">
                                <h6 className="card__title">
                                    We hebben een passie voor workshops —>
                                    bekijk alles:
                                </h6>
                            </figcaption>
                        </Link>
                    </figure>
                </div>

                <div className="showcase__item">
                    <div
                        className="intro"
                        dangerouslySetInnerHTML={{
                            __html:
                                data.datoCmsHome.introtekstDeel2Node
                                    .childMarkdownRemark.html
                        }}
                    ></div>
                </div>

                <div className="showcase__item">
                    <figure className="card">
                        <Img fluid={getAfbeelding().fluid} />
                    </figure>
                </div>

                <div className="showcase__item">
                    <figure className="card">
                        <Img fluid={getAfbeelding().fluid} />
                    </figure>
                </div>

                <div className="showcase__item">
                    <figure className="card">
                        <Img fluid={getAfbeelding().fluid} />
                    </figure>
                </div>
            </Masonry>

            <div
                className="believers"
                dangerouslySetInnerHTML={{
                    __html:
                        data.datoCmsHome.tekstBelieversNode.childMarkdownRemark
                            .html
                }}
            ></div>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query IndexQuery {
        datoCmsHome {
            seoMetaTags {
                ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
                childMarkdownRemark {
                    html
                }
            }
            introtekstDeel2Node {
                childMarkdownRemark {
                    html
                }
            }
            tekstBelieversNode {
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
        datoCmsTekeningen {
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

// allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//   edges {
//     node {
//       id
//       title
//       slug
//       excerpt
//       coverImage {
//         fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//           ...GatsbyDatoCmsSizes
//         }
//       }
//     }
//   }
// }
