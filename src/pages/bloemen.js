import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const bloemen = ({ data }) => {
  console.log(data.allDatoCmsBloem.edges);
  return (
    <main>
      {data.allDatoCmsBloem.edges.map(a => {
        console.log(a);

        return (
          <p key={a.node.id}>
            <p>{a.node.titel}</p>
            <Img fluid={a.node.picture.fluid} />
            <p>{a.node.titelwerk}</p>
            <p>{a.node.uitvoerderwerk}</p>
            <p>{a.node.jaarwerk}</p>
            <div
              dangerouslySetInnerHTML={{
                __html: a.node.bronwerkNode.childMarkdownRemark.html
              }}
            ></div>
            {/* <div dangerouslySetInnerHTML={{ __html: a.node.bronwerk }}></div> */}

            <div>{a.node.uitleg}</div>
          </p>
        );
      })}
    </main>
  );
};

export default bloemen;

export const query = graphql`
  query bloemenQuery {
    allDatoCmsBloem(sort: { order: ASC, fields: meta___createdAt }) {
      edges {
        node {
          id
          bronwerkNode {
            childMarkdownRemark {
              html
            }
          }
          titel
          titelwerk
          uitleg
          jaarwerk
          uitvoerderwerk
          picture {
            fluid(maxWidth: 300, imgixParams: { auto: "compress", fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
