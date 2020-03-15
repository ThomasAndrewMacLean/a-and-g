import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Masonry from "react-masonry-component";

const BelieversPage = ({ data, location }) => {
  console.log(data);

  return (
    <Layout location={location}>
      <div className="pusher believers">
        <Masonry className="showcase">
          <div className="showcase__item">
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsBeliever.jaarlijkseBijdrage1Node
                    .childMarkdownRemark.html
              }}
            ></div>
          </div>

          <div className="showcase__item">
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsBeliever.quote1Node
                    .childMarkdownRemark.html
              }}
            ></div>
          </div>
          <div className="showcase__item">
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsBeliever.jaarlijkseBijdrage2Node
                    .childMarkdownRemark.html
              }}
            ></div>
          </div>

          <div className="showcase__item">
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsBeliever.quote2Node
                    .childMarkdownRemark.html
              }}
            ></div>
          </div>
          <div className="showcase__item">
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsBeliever.jaarlijkseBijdrage3Node
                    .childMarkdownRemark.html
              }}
            ></div>
          </div>

          <div className="showcase__item">
            <div
              className="intro"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsBeliever.quote3Node
                    .childMarkdownRemark.html
              }}
            ></div>
          </div>
        </Masonry>
      </div>
    </Layout>
  );
};

export default BelieversPage;

export const query = graphql`
  query BelieverQuery {
    datoCmsBeliever {
      jaarlijkseBijdrage1Node {
        childMarkdownRemark {
          html
        }
      }
      jaarlijkseBijdrage2Node {
        childMarkdownRemark {
          html
        }
      }
      jaarlijkseBijdrage3Node {
        childMarkdownRemark {
          html
        }
      }
      quote1Node {
        childMarkdownRemark {
          html
        }
      }
      quote2Node {
        childMarkdownRemark {
          html
        }
      }
      quote3Node {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
