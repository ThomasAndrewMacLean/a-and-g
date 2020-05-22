import React from "react";
import { Link, graphql } from "gatsby";
import Masonry from "react-masonry-component";
import Img from "gatsby-image";
import Layout from "../components/layout";

const WorkshopsPage = ({ data, location }) => {
  console.log(data);
  return (
    <Layout location={location}>
      <Masonry className="showcase">
        {/* <div className="showcase__item">
                    <div
                        className="intro"
                        dangerouslySetInnerHTML={{
                            __html:
                                data.datoCmsHome.introTextNode
                                    .childMarkdownRemark.html
                        }}
                    ></div>
                </div> */}
        <div className="showcase__item">
          <h1 className="workshops-title">
            We hebben een passie voor workshops
          </h1>
        </div>
        {data.allDatoCmsWorkshop.edges.map(({ node: work }) => (
          <div key={work.id} className="showcase__item">
            <figure
              className={
                new Date(work.datum) < new Date()
                  ? "workshop-voorbij card"
                  : "card"
              }
            >
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
                    <date>
                      {new Date(work.datum).toLocaleString("nl-BE", {
                        month: "long",
                        year: "numeric",
                      })}
                    </date>
                  )}
                  <div className="card__description">
                    <p>{work.ondertitel}</p>
                  </div>
                </figcaption>
              </Link>
            </figure>
          </div>
        ))}
      </Masonry>
    </Layout>
  );
};

export default WorkshopsPage;

export const query = graphql`
  query WorkshopsQuery {
    allDatoCmsWorkshop(sort: { fields: datum, order: ASC }) {
      edges {
        node {
          id
          ondertitel
          titel
          datum
          afbeelding {
            url
            fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
