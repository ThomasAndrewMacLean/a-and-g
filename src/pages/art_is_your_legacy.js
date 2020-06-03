import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import DokterText from "../components/DokterText";
import Tekening from "../components/Tekening";
import CtaBlock from "../components/CtaBlock";
import Img from "gatsby-image";

const LegacyPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="pusher">
        <Masonry className="showcase">
          <CtaBlock
            ctaClass="legacy-text"
            text={data.datoCmsArtIsYourLegacy.textNode.childMarkdownRemark.html}
          />
          {data.datoCmsArtIsYourLegacy.images.map((tekening) => {
            return (
              <div className="showcase__item">
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
