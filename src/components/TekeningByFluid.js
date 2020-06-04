import React from "react";
import Img from "gatsby-image";

const TekeningByFluid = ({ tekening, title }) => {
  return (
    (tekening && tekening.fluid && (
      <div className="showcase__item">
        <figure className="card werk-wrap">
          <Img className="card__image" fluid={tekening.fluid} />
          {title && <span className="werk_titel">{title}</span>}
        </figure>
      </div>
    )) ||
    null
  );
};

export default TekeningByFluid;
