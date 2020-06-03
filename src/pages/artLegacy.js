import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import DokterText from "../components/DokterText"; 
import Img from "gatsby-image";

const LegacyPage = ({ data, location }) => {
  console.log(data.datoCmsArtIsYourLegacy.textNode.childMarkdownRemark.html);
  return (
    <Layout location={location}>
      <div className="pusher">
        <Masonry className="showcase">
          <div className="showcase__item">
            <div className={"legacy-text" + " intro"}>
              <h6
                className="card__title"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsArtIsYourLegacy.textNode.childMarkdownRemark
                      .html,
                }}
              />
            </div>
          </div>
          {data.datoCmsArtIsYourLegacy.images.map((tekening, index) => {
            return (
              <div key={index} className="showcase__item">
                <figure className="card werk-wrap">
                  <Img className="card__image" fluid={tekening.fluid} />
                  {/* <span className="werk_titel">
                    {data.datoCmsTekeningen.tekeningen[nummer].title}
                  </span> */}
                </figure>
              </div>
            );
          })}
        </Masonry>
      </div>

      <DokterText></DokterText>
    </Layout>
  );
};

export default LegacyPage;

export const query = graphql`
  query LegacyQuery {
    datoCmsArtIsYourLegacy {
      textNode {
        childMarkdownRemark {
          html
        }
      }
      images {
        fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
