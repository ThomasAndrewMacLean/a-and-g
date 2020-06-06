import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import DokterText from "../components/DokterText";
import Img from "gatsby-image";
import TekeningByFluid from "../components/TekeningByFluid";
import TextBlock from "../components/TextBlock";
import NewsLetter from "../components/NewsLetter";

const LegacyPage = ({ data, location }) => {
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
          <TextBlock
            text={
              data.datoCmsArtIsYourLegacy.textdNode.childMarkdownRemark.html
            }
          ></TextBlock>{" "}
          {/* KUNSTENAAR */}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurKunstenaar}
            text={
              data.datoCmsArtIsYourLegacy.textKunstenaarNode.childMarkdownRemark
                .html
            }
          ></TextBlock>
          <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[3]}
          ></TekeningByFluid>
          {/* AMBASSADEUR */}
          {/* <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurAmbassadeur}
            text={
              data.datoCmsArtIsYourLegacy.textAmbassadeurNode
                .childMarkdownRemark.html
            }
          ></TextBlock> */}
          <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[0]}
          ></TekeningByFluid>
          {/* PETER */}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurPeter}
            text={
              data.datoCmsArtIsYourLegacy.textPeterNode.childMarkdownRemark.html
            }
          ></TextBlock>
          <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[1]}
          ></TekeningByFluid>
          <NewsLetter></NewsLetter>
          {/* METER */}
          <TextBlock
            color={data.datoCmsArtIsYourLegacy.kleurMeter}
            text={
              data.datoCmsArtIsYourLegacy.textMeterNode.childMarkdownRemark.html
            }
          ></TextBlock>
          <TekeningByFluid
            tekening={data.datoCmsArtIsYourLegacy.images[2]}
          ></TekeningByFluid>
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
