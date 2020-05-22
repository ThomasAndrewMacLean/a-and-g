import React from "react";
import { graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Tekening from "../components/Tekening";

const TekeningenPage = ({ data, location }) => {
  console.log(data);

  return (
    <Layout location={location}>
      <>
        <div className="showcase__item">
          <h1
            className="tekening-title"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsTekeningen.titelNode.childMarkdownRemark.html,
            }}
          ></h1>
        </div>
        <Masonry className="showcase">
          {data.datoCmsTekeningen.tekeningen.map((tekening, i) => (
            <Tekening key={i} nummer={i}></Tekening>
            //   <div key={tekening.filename} className="showcase__item">
            //     <figure className="card">
            //       <Img fluid={tekening.fluid} />
            //     </figure>
            //   </div>
          ))}
        </Masonry>
      </>
    </Layout>
  );
};

export default TekeningenPage;

export const query = graphql`
  query TekeningenQuery {
    datoCmsTekeningen {
      titelNode {
        childMarkdownRemark {
          html
        }
      }
      uitlegNode {
        childMarkdownRemark {
          html
        }
      }
      tekeningen {
        filename
        url
        fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
