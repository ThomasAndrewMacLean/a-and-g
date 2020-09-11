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

const MagazinePage = ({ location }) => {
  // console.log(
  //   data.allDatoCmsWorkshop.edges.map((x) => x.node).find((x) => x.artlegacy)
  // );
  // const workshop = data.allDatoCmsWorkshop.edges
  //   .map((x) => x.node)
  //   .find((x) => x.artlegacy);

  return (
    <Layout location={location}>
      <div className="pusher"></div>
    </Layout>
  );
};

export default MagazinePage;

// export const query = graphql`
//   query MagazineQuery {
//     datoCmsMagazine {
//       text {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;
