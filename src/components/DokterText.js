import React from "react";
import { StaticQuery, graphql } from "gatsby";

const DokterText = () => {
  return (
    <StaticQuery
      query={graphql`
        query DokterTextQuery {
          datoCmsHome {
            tekstBelieversNode {
              childMarkdownRemark {
                html
              }
            }
          }
        }
      `}
      render={(data) => (
        <div
          className="believers"
          dangerouslySetInnerHTML={{
            __html:
              data.datoCmsHome.tekstBelieversNode.childMarkdownRemark.html,
          }}
        ></div>
      )}
    />
  );
};

export default DokterText;
