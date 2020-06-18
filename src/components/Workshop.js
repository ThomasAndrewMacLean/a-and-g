import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";

const Workshop = ({ work }) => {
  return (
    <div key={work.id} className="showcase__item">
      <figure className="card">
        <Link
          to={`/workshops/${work.titel
            .split("?")
            .join("")
            .split(" ")
            .join("_")}`}
          className="card__image"
        >
          <Img fluid={work.afbeelding.fluid} />
          <figcaption className="card__caption">
            <h6 className="card__title">{work.titel}</h6>
            {work.datum && (
              <time>
                {new Date(work.datum).toLocaleString("nl-BE", {
                  month: "long",
                  year: "numeric",
                })}
              </time>
            )}
            <div className="card__description">
              <p>{work.ondertitel}</p>
            </div>
          </figcaption>
        </Link>
      </figure>
    </div>
  );
};

export default Workshop;
