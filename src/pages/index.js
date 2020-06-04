import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Layout from "../components/layout";
import DokterText from "../components/DokterText";
import Tekening from "../components/Tekening";
import CtaBlock from "../components/CtaBlock";
import NewsLetter from "../components/NewsLetter";

const IndexPage = ({ data, location }) => {
  return (
    <Layout location={location}>
      <div className="pusher">
        <Masonry className="showcase">
          <CtaBlock
            ctaClass="intro-text"
            text={data.datoCmsHome.introTextNode.childMarkdownRemark.html}
          />

          <CtaBlock
            ctaClass="bloemen"
            linkTo="/bloemen/"
            text={data.datoCmsHome.blokBloemenNode.childMarkdownRemark.html}
            buttonText={data.datoCmsHome.blokBloemenKnop}
          />

          <Tekening nummer="0"></Tekening>

          <CtaBlock
            ctaClass="artLegacy"
            linkTo="/artLegacy/"
            text={data.datoCmsHome.blokLegacyNode.childMarkdownRemark.html}
            buttonText={data.datoCmsHome.blokLegacyKnop}
          />

          <CtaBlock
            ctaClass="tekeningen"
            linkTo="/tekeningen/"
            text={data.datoCmsHome.blokTekeningenNode.childMarkdownRemark.html}
            buttonText={data.datoCmsHome.blokTekeningenKnop}
          />

          <Tekening nummer="1"></Tekening>

          <CtaBlock
            ctaClass="workshop"
            linkTo="/workshops/"
            text={data.datoCmsHome.blokWorkshopsNode.childMarkdownRemark.html}
            buttonText={data.datoCmsHome.blokWorkshopsKnop}
          />

          <Tekening nummer="2"></Tekening>

          <CtaBlock
            ctaClass="intro-text2"
            text={data.datoCmsHome.introtekstDeel2Node.childMarkdownRemark.html}
          />

          <Tekening nummer="3"></Tekening>
          <NewsLetter />

          <Tekening nummer="4"></Tekening>

          <CtaBlock
            ctaClass="workshop2"
            linkTo="/contact/"
            text={data.datoCmsHome.blokWorkshops2Node.childMarkdownRemark.html}
            buttonText={data.datoCmsHome.blokWorkshops2Knop}
          />

          <Tekening nummer="5"></Tekening>
        </Masonry>
      </div>

      <DokterText></DokterText>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsArtIsYourLegacy {
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
      blokTekeningenNode {
        childMarkdownRemark {
          html
        }
      }
      blokWorkshopsNode {
        childMarkdownRemark {
          html
        }
      }
      blokWorkshops2Node {
        childMarkdownRemark {
          html
        }
      }
      blokBloemenNode {
        childMarkdownRemark {
          html
        }
      }
      blokLegacyNode {
        childMarkdownRemark {
          html
        }
      }
      blokLegacyKnop

      blokTekeningenKnop
      blokWorkshopsKnop
      blokBloemenKnop
      blokWorkshops2Knop
    }
  }
`;
