import React from "react";
import { Link } from "gatsby";

const CtaBlock = ({ ctaClass, linkTo, text, buttonText }) => {
  return (
    <div className="showcase__item">
      <div className={ctaClass + " intro"}>
        <h6
          className="card__title"
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        {linkTo && (
          <Link to={linkTo}>
            <button className="card__button">{buttonText}</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default CtaBlock;
