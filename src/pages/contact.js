import React from 'react';
import { graphql } from 'gatsby';
import Masonry from 'react-masonry-component';
import Layout from '../components/layout';

const ContactPage = ({ data, location }) => {
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
            </Masonry>
        </Layout>
    );
};

export default ContactPage;

export const query = graphql`
    query ContactQuery {
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
