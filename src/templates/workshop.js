import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data, location }) => {
  console.log(data);

  return (
    <Layout location={location}>
      <article className="sheet">
        {/* <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} /> */}
        <div className="sheet__inner">
          <h1 className="sheet__title">{data.datoCmsWorkshop.titel}</h1>
          <p className="sheet__lead">{data.datoCmsWorkshop.subtitel}</p>

          <div
            className="sheet__body"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsWorkshop.uitlegNode.childMarkdownRemark.html,
            }}
          />
          <button className="button mb_2">
            <a
              href={
                "mailto:info@agizzles.be?subject=inschrijving: " +
                data.datoCmsWorkshop.titel
              }
            >
              schrijf mij in voor deze workshop
            </a>
          </button>
          <div className="sheet__gallery">
            <Img fluid={data.datoCmsWorkshop.afbeelding.fluid} />
          </div>
        </div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query WorkQuery($titel: String!) {
    datoCmsWorkshop(titel: { eq: $titel }) {
      titel
      uitlegNode {
        childMarkdownRemark {
          html
        }
      }
      ondertitel
      afbeelding {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

// export const query = graphql`
//     query WorkQuery($slug: String!) {
//         datoCmsWorkshop(slug: { eq: $slug }) {
//             title
//             excerpt
//             gallery {
//                 fluid(
//                     maxWidth: 200
//                     imgixParams: { fm: "jpg", auto: "compress" }
//                 ) {
//                     src
//                 }
//             }
//             descriptionNode {
//                 childMarkdownRemark {
//                     html
//                 }
//             }
//             coverImage {
//                 url
//                 fluid(
//                     maxWidth: 600
//                     imgixParams: { fm: "jpg", auto: "compress" }
//                 ) {
//                     ...GatsbyDatoCmsSizes
//                 }
//             }
//         }
//     }
// `;
