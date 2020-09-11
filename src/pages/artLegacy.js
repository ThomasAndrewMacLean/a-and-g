import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import DokterText from "../components/DokterText";
import Img from "gatsby-image";
import TekeningByFluid from "../components/TekeningByFluid";
import TextBlock from "../components/TextBlock";
import NewsLetter from "../components/NewsLetter";
import Workshop from "../components/Workshop";

const LegacyPage = ({ data, location }) => {
  console.log(
    data.allDatoCmsWorkshop.edges.map((x) => x.node).find((x) => x.artlegacy)
  );
  const workshop = data.allDatoCmsWorkshop.edges
    .map((x) => x.node)
    .find((x) => x.artlegacy);

  return (
    <Layout location={location}>
      <div className="pusher">
        <Masonry className="showcase">
          <TextBlock
            text={
              data.datoCmsArtIsYourLegacy.textaNode.childMarkdownRemark.html
            }
          ></TextBlock>
          <TextBlock
            text={
              data.datoCmsArtIsYourLegacy.textbNode.childMarkdownRemark.html
            }
          ></TextBlock>
          <TextBlock
            text={
              data.datoCmsArtIsYourLegacy.textcNode.childMarkdownRemark.html
            }
          ></TextBlock>
          {workshop && <Workshop work={workshop}></Workshop>}
          <TextBlock
            text={
              data.datoCmsArtIsYourLegacy.textdNode.childMarkdownRemark.html
            }
          ></TextBlock>
          {/* KUNSTENAAR */}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurKunstenaar}
            text={
              data.datoCmsArtIsYourLegacy.textKunstenaarNode.childMarkdownRemark
                .html
            }
            tekening={data.datoCmsArtIsYourLegacy.images[5]}
          ></TextBlock>
          {/* <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[5]}
          ></TekeningByFluid> */}

          {/* PETER */}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurPeter}
            text={
              data.datoCmsArtIsYourLegacy.textPeterNode.childMarkdownRemark.html
            }
            tekening={data.datoCmsArtIsYourLegacy.images[6]}
          ></TextBlock>
          {/* <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[6]}
          ></TekeningByFluid> */}
          <NewsLetter></NewsLetter>
          {/* METER */}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurMeter}
            text={
              data.datoCmsArtIsYourLegacy.textMeterNode.childMarkdownRemark.html
            }
            tekening={data.datoCmsArtIsYourLegacy.images[3]}
          ></TextBlock>
          {/* <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[3]}
          ></TekeningByFluid> */}
          {/* AMBASSADEUR = cargo mas*/}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurAmbassadeur}
            text={
              data.datoCmsArtIsYourLegacy.textAmbassadeurNode
                .childMarkdownRemark.html
            }
            tekening={data.datoCmsArtIsYourLegacy.images[4]}
          ></TextBlock>

          {/* CURRATRO = cargo mas*/}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurCurator}
            text={
              data.datoCmsArtIsYourLegacy.textCuratorNode.childMarkdownRemark
                .html
            }
            tekening={data.datoCmsArtIsYourLegacy.images[7]}
          ></TextBlock>
        </Masonry>
      </div>
      {/* 
      <DokterText></DokterText> */}
    </Layout>
  );
};

export default LegacyPage;

export const query = graphql`
  query LegacyQuery {
    allDatoCmsWorkshop(sort: { fields: datum, order: ASC }) {
      edges {
        node {
          id
          ondertitel
          artlegacy
          titel
          datum
          afbeelding {
            url
            fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
    datoCmsArtIsYourLegacy {
      kleurAmbassadeur
      kleurKunstenaar
      kleurMeter
      kleurPeter
      kleurCurator
      textCuratorNode {
        childMarkdownRemark {
          html
        }
      }
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
      textbNode {
        childMarkdownRemark {
          html
        }
      }
      textcNode {
        childMarkdownRemark {
          html
        }
      }
      textdNode {
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
