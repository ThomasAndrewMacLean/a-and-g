import React, { useState, useEffect } from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Masonry from "react-masonry-component";
import Layout from "../components/layout";

const IndexPage = ({ data, location }) => {
  // const getAfbeelding = () => {
  //   return data.datoCmsTekeningen.tekeningen[
  //     Math.floor(Math.random() * data.datoCmsTekeningen.tekeningen.length)
  //   ];
  // };
  // const [afbeelding] = useState(getAfbeelding());
  const [email, setEmail] = useState("");
  const [processed, setProcessed] = useState(false);
  useEffect(() => {
    // setInterval(() => {
    //     setAfbeelding(getAfbeelding());
    // }, 8000);
  }, []);

  const updateEmail = e => {
    setEmail(e.target.value);
  };
  const saveEmail = e => {
    e.preventDefault();
    if (processed) return;
    setProcessed(true);
    fetch("https://europe-west1-a-and-g.cloudfunctions.net/addToMailingList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email })
    })
      .then(x => x.json())
      .then(y => {
        console.log(y);
      });
  };
  return (
    <Layout location={location}>
      <div className="pusher">
        <Masonry className="showcase">
          <div className="showcase__item">
            <div
              className="intro intro-text"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsHome.introTextNode.childMarkdownRemark.html
              }}
            ></div>
          </div>

          <div className="showcase__item">
            <figure className="card">
              <Img fluid={data.datoCmsTekeningen.tekeningen[0].fluid} />
            </figure>
          </div>

          <div className="showcase__item">
            <div className="intro tekeningen">
              <h6
                className="card__title"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsHome.blokTekeningenNode.childMarkdownRemark.html
                }}
              ></h6>
              <Link to={`/tekeningen/`}>
                <button className="card__button">
                  {data.datoCmsHome.blokTekeningenKnop}
                </button>
              </Link>
            </div>
          </div>

          <div className="showcase__item">
            <figure className="card">
              <Img fluid={data.datoCmsTekeningen.tekeningen[1].fluid} />
            </figure>
          </div>

          <div className="showcase__item">
            <div className="intro workshop">
              <h6
                className="card__title"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsHome.blokWorkshopsNode.childMarkdownRemark.html
                }}
              />
              <Link to={`/workshops/`}>
                <button className="card__button">
                  {data.datoCmsHome.blokWorkshopsKnop}
                </button>
              </Link>
            </div>
          </div>

          <div className="showcase__item">
            <figure className="card">
              <Img fluid={data.datoCmsTekeningen.tekeningen[2].fluid} />
            </figure>
          </div>

          <div className="showcase__item">
            <div
              className="intro intro-text2"
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsHome.introtekstDeel2Node.childMarkdownRemark.html
              }}
            ></div>
          </div>

          <div className="showcase__item">
            <figure className="card">
              <Img fluid={data.datoCmsTekeningen.tekeningen[3].fluid} />
            </figure>
          </div>
          <div className="showcase__item">
            <div className="newsletter">
              <h3>{data.datoCmsHome.blockNieuwsbrief}</h3>
              <form onSubmit={saveEmail}>
                <input
                  type="email"
                  name="email"
                  onChange={updateEmail}
                  required
                  placeholder="email"
                />
                <input
                  type="submit"
                  value={data.datoCmsHome.blokNieuwsbriefKnop}
                />
              </form>
            </div>
          </div>
          <div className="showcase__item">
            <figure className="card">
              <Img fluid={data.datoCmsTekeningen.tekeningen[4].fluid} />
            </figure>
          </div>
          <div className="showcase__item">
            <div className="intro workshop2">
              <h6
                className="card__title"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsHome.blokWorkshops2Node.childMarkdownRemark.html
                }}
              />
              <Link to={`/contact/`}>
                <button className="card__button">
                  {data.datoCmsHome.blokWorkshops2Knop}
                </button>
              </Link>
            </div>
          </div>
          <div className="showcase__item">
            <figure className="card">
              <Img fluid={data.datoCmsTekeningen.tekeningen[5].fluid} />
            </figure>
          </div>
        </Masonry>
      </div>

      <div
        className="believers"
        dangerouslySetInnerHTML={{
          __html: data.datoCmsHome.tekstBelieversNode.childMarkdownRemark.html
        }}
      ></div>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      introtekstDeel2Node {
        childMarkdownRemark {
          html
        }
      }
      tekstBelieversNode {
        childMarkdownRemark {
          html
        }
      }
      blokTekeningenNode {
        childMarkdownRemark {
          html
        }
      }
      blokWorkshopsNode {
        childMarkdownRemark {
          html
        }
      }
      blokWorkshops2Node {
        childMarkdownRemark {
          html
        }
      }
      blokTekeningenKnop
      blokWorkshopsKnop
      blockNieuwsbrief
      blokNieuwsbriefKnop
      blokWorkshops2Knop
      address {
        latitude
        longitude
      }
      addressText
    }
    datoCmsTekeningen {
      tekeningen {
        filename
        url
        fluid(maxWidth: 300, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;

// allDatoCmsWork(sort: { fields: [position], order: ASC }) {
//   edges {
//     node {
//       id
//       title
//       slug
//       excerpt
//       coverImage {
//         fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
//           ...GatsbyDatoCmsSizes
//         }
//       }
//     }
//   }
// }
