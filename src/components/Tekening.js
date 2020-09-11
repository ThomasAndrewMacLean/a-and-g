import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Tekening = ({ nummer }) => {
  return (
    <StaticQuery
      query={graphql`
        query TekeningQuery {
          datoCmsHome {
            tekingenhome {
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
      render={(data) =>
        nummer < data.datoCmsHome.tekingenhome.length && (
          <div className="showcase__item">
            <figure className="card werk-wrap">
              <Img
                className="card__image"
                fluid={data.datoCmsHome.tekingenhome[nummer].fluid}
              />
              <span className="werk_titel">
                {nummer}
                {data.datoCmsHome.tekingenhome[nummer].title}
              </span>
            </figure>
          </div>
        )
      }
    />
  );
};

export default Tekening;
