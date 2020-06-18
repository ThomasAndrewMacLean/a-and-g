import React from "react";
import Img from "gatsby-image";

const TextBlock = ({ text, color, tekening }) => {
  return text ? (
    <div className="showcase__item">
      {tekening && (
        <figure className="card werk-wrap">
          <Img className="card__image" fluid={tekening.fluid} />
          {/* {title && <span className="werk_titel">{title}</span>} */}
        </figure>
      )}
      <div
        style={{
          background: color || "#fff",
        }}
        className={"legacy-text intro"}
      >
        {text && (
          <div
            className="card__title"
            dangerouslySetInnerHTML={{
              __html: text,
            }}
          />
        )}
      </div>
    </div>
  ) : null;
};

export default TextBlock;
