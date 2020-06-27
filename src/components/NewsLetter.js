import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const NewsLetter = ({ nummer }) => {
  const [email, setEmail] = useState("");
  const [processed, setProcessed] = useState(false);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const saveEmail = (e) => {
    e.preventDefault();
    if (processed) return;
    setProcessed(true);
  
    fetch("https://europe-west1-a-and-g.cloudfunctions.net/addToMailingList", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((x) => x.json())
      .then((y) => {
        console.log(y);
      });
  };
  return (
    <StaticQuery
      query={graphql`
        query NewsLetterQuery {
          datoCmsHome {
            blockNieuwsbrief
            blokNieuwsbriefKnop
          }
        }
      `}
      render={(data) => (
        <div className="showcase__item">
          <div className="newsletter">
            <h3>{data.datoCmsHome.blockNieuwsbrief}</h3>
            <form onSubmit={saveEmail}>
              {processed ? (
                <p>Bedankt voor je inschrijving! 😘</p>
              ) : (
                <input
                  type="email"
                  name="email"
                  onChange={updateEmail}
                  required
                  placeholder="email"
                />
              )}
              <div>
                <input
                  type="submit"
                  disabled={processed}
                  className="button"
                  value={data.datoCmsHome.blokNieuwsbriefKnop}
                />
              </div>
            </form>
          </div>
        </div>
      )}
    />
  );
};

export default NewsLetter;
