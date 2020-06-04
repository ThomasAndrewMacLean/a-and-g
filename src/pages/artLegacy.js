import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import DokterText from "../components/DokterText";
import Img from "gatsby-image";

const LegacyPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="pusher">
        <Masonry className="showcase">
          <div className="showcase__item">
            <div className={"legacy-text" + " intro"}>
              {data.datoCmsArtIsYourLegacy.textaNode.childMarkdownRemark
                .html && (
                <div
                  className="card__title"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsArtIsYourLegacy.textaNode.childMarkdownRemark
                        .html,
                  }}
                />
              )}
            </div>
          </div>

          {/* AMBASSADEUR */}
          <div className="showcase__item">
            <div
              style={{
                background: data.datoCmsArtIsYourLegacy.kleurAmbassadeur,
              }}
              className={"legacy-text" + " intro"}
            >
              {data.datoCmsArtIsYourLegacy.textAmbassadeurNode
                .childMarkdownRemark.html && (
                <div
                  className="card__title"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsArtIsYourLegacy.textAmbassadeurNode
                        .childMarkdownRemark.html,
                  }}
                />
              )}
            </div>
          </div>
          {/* PETER */}
          <div className="showcase__item">
            <div
              style={{
                background: data.datoCmsArtIsYourLegacy.kleurPeter,
              }}
              className={"legacy-text" + " intro"}
            >
              {data.datoCmsArtIsYourLegacy.textPeterNode.childMarkdownRemark
                .html && (
                <div
                  className="card__title"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsArtIsYourLegacy.textPeterNode
                        .childMarkdownRemark.html,
                  }}
                />
              )}
            </div>
          </div>
          {/* METER */}
          <div className="showcase__item">
            <div
              style={{
                background: data.datoCmsArtIsYourLegacy.kleurMeter,
              }}
              className={"legacy-text" + " intro"}
            >
              {data.datoCmsArtIsYourLegacy.textMeterNode.childMarkdownRemark
                .html && (
                <div
                  className="card__title"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsArtIsYourLegacy.textMeterNode
                        .childMarkdownRemark.html,
                  }}
                />
              )}
            </div>
          </div>
          {/* KUNSTENAAR */}
          <div className="showcase__item">
            <div
              style={{
                background: data.datoCmsArtIsYourLegacy.kleurKunstenaar,
              }}
              className={"legacy-text" + " intro"}
            >
              {data.datoCmsArtIsYourLegacy.textKunstenaarNode
                .childMarkdownRemark.html && (
                <div
                  className="card__title"
                  dangerouslySetInnerHTML={{
                    __html:
                      data.datoCmsArtIsYourLegacy.textKunstenaarNode
                        .childMarkdownRemark.html,
                  }}
                />
              )}
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
      kleurAmbassadeur
      kleurKunstenaar
      kleurMeter
      kleurPeter
      textAmbassadeurNode {
        childMarkdownRemark {
          html
        }
      }
      textKunstenaarNode {
        childMarkdownRemark {
          html
        }
      }
      textMeterNode {
        childMarkdownRemark {
          html
        }
      }
      textPeterNode {
        childMarkdownRemark {
          html
        }
      }
      textaNode {
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
