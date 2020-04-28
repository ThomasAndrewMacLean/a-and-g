import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Tekening = ({ nummer }) => {
  return (
    <StaticQuery
      query={graphql`
        query TekeningQuery {
          datoCmsTekeningen {
            tekeningen {
              filename
              url
              title
              fluid(
                maxWidth: 300
                imgixParams: { fm: "jpg", auto: "compress" }
              ) {
                ...GatsbyDatoCmsSizes
              }
            }
          }
        }
      `}
      render={(data) => (
        <div className="showcase__item">
          <figure className="card werk-wrap">
            <Img
              className="card__image"
              fluid={data.datoCmsTekeningen.tekeningen[nummer].fluid}
            />
            <span className="werk_titel">
              {data.datoCmsTekeningen.tekeningen[nummer].title}
            </span>
          </figure>
        </div>
      )}
    />
  );
};

export default Tekening;
