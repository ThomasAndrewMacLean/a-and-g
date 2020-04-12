import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import "../styles/blocks/bloemen.sass";
import axios from "axios";

const BloemenPage = ({ data }) => {
  const [count, setCount] = useState(0);
  const [sentPic, setSentPic] = useState(false);
  const a = data.allDatoCmsBloem.edges[count - 1];
  const colors = [
    "black",
    "#019aa6",
    "#be583b",
    "#b1cb6a",
    "#a9bbdb",
    "#bcaf50",
    "#bcafc8",
    "#ff5780",
    "#8c9569",
    "#83877d",
    "#f8f024"
  ];

  let location = "";
  if (typeof window !== "undefined") {
    location = window.location.search;
  }

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      return;
    }
    const countFromUrlSplit = window.location.search.split("count=");
    console.log(countFromUrlSplit);
    if (countFromUrlSplit.length === 2) {
      setCount(parseInt(countFromUrlSplit[1]));
    }
  }, [location]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.document) {
      return;
    }
    document.querySelector("html").style.backgroundColor = colors[count];
  }, [count]);

  const handleChange = files => {
    const file = files[0];

    var validImageTypes = ["image/gif", "image/jpeg", "image/png"];
    if (validImageTypes.indexOf(file.type) === -1) {
      console.log("wrong type");
      return;
    }

    setSentPic(true);

    //   const cloudName = 'dizmjjtge';
    var fd = new FormData();
    fd.append("upload_preset", "shspmpte");
    fd.append("tags", "bloemendoendromen"); // Optional - add tag for image admin in Cloudinary
    fd.append("cloud_name", "dhtcvwwoz");
    fd.append("file", file);

    axios("https://api.cloudinary.com/v1_1/dhtcvwwoz/image/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencode"
      },
      data: fd
    })
      .then(img => {
        console.log(img);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <main className="bloemenPage">
      <button className="info-knop">i</button>
      <div className="info-modal">
        <ul>
          <li>
            <strong>Deel je eigen kunstwerk #bloemendoendromen</strong>
          </li>
          <li>Een initiatief van Annouk Westerling (a.gizzles)</li>
          <li>Alle tekst: © Tom De Mette 2020 (aka cadavre exquis)</li>
          <li>Webdesign: Thomas MacLean</li>
        </ul>
      </div>
      {count === 0 ? (
        <div className="frontpage">
          <h1>Als bloemen vertellen…</h1>
          <h2>Anekdotes en verhalen uit de kelk van een bloem</h2>
          <h3>door Tom De Mette (aka cadavre exquis) </h3>
          <p className="uitleg">
            Hou jij ook zo veel van bloemen? En wist je dat bloemen kunnen
            vertellen? Ze zeggen wel eens dat je de zee kan horen als je een
            schelp tegen je oor houdt, maar wat weinig mensen weten, is dat
            bloemen kunnen praten. Ja hoor, bloemen nemen heus geen blad voor de
            mond. Ze vertellen honderduit over alles wat ze zien en voelen. In
            deze reeks van beelden ontdek je welke verhalen ze te vertellen
            hebben en hoe wij, mensen, die verhalen hebben opgetekend. De
            verhalen die bloemen ons te vertellen hebben, zijn nu kunstwerken
            geworden. Ik ging wandelen en plukte voor jullie een mooi boeket.
            Het zijn stuk voor stuk beelden om heerlijk van te genieten. En het
            leukste is dat ze je ook iets leren. Want als je zelf wil gaan
            tekenen of schilderen, dan moet je goed kijken naar de beelden. Je
            zal gauw veel zin en inspiratie krijgen om zelf aan de slag te gaan.
            Vooruit, waar wachten jullie nog op? Leg je oor te luister, geef je
            ogen de kost en laat je verbeelding maar vrij. En vergeet niet: geen
            bloem bloeit zonder waarom…
          </p>

          {sentPic ? (
            <p>Dank je wel!!!</p>
          ) : (
            <label id="uploadLabel" htmlFor="upload">
              Klik hier om een foto van je kunstwerk naar ons te sturen
            </label>
          )}
          <input
            id="upload"
            type="file"
            accept="image/*"
            capture="camera"
            onChange={e => handleChange(e.target.files)}
          />
        </div>
      ) : (
        <article>
          <h2>{a.node.titel}</h2>
          <Img fluid={a.node.picture.fluid} />
          {a.node.titelwerk && <span className="info">{a.node.titelwerk}</span>}
          {a.node.uitvoerderwerk && (
            <span className="info">{a.node.uitvoerderwerk}</span>
          )}
          {a.node.jaarwerk && <span className="info">{a.node.jaarwerk}</span>}
          <div
            className="info"
            dangerouslySetInnerHTML={{
              __html: a.node.bronwerkNode.childMarkdownRemark.html
            }}
          ></div>

          <div className="uitleg">{a.node.uitleg}</div>
        </article>
      )}
      <div className="button-wrap">
        <button
          disabled={count === 0}
          onClick={() => {
            setCount(parseInt(count - 1));
            window.scrollTo({ top: 0, behavior: "smooth" });
            var newurl =
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?count=" +
              parseInt(count - 1);
            window.history.pushState({ path: newurl }, "", newurl);
          }}
        >
          Vorige
        </button>
        <button
          className="goHome"
          disabled={count === 0}
          onClick={() => {
            setCount(parseInt(0));
            window.scrollTo({ top: 0, behavior: "smooth" });
            var newurl =
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?count=0";
            window.history.pushState({ path: newurl }, "", newurl);
          }}
        >
          Startpagina
        </button>
        <button
          disabled={count === 10}
          onClick={() => {
            setCount(parseInt(count + 1));
            window.scrollTo({ top: 0, behavior: "smooth" });
            var newurl =
              window.location.protocol +
              "//" +
              window.location.host +
              window.location.pathname +
              "?count=" +
              parseInt(count + 1);
            window.history.pushState({ path: newurl }, "", newurl);
          }}
        >
          Volgende
        </button>
      </div>
    </main>
  );
};

export default BloemenPage;

export const query = graphql`
  query bloemenQuery {
    allDatoCmsBloem(sort: { order: ASC, fields: meta___createdAt }) {
      edges {
        node {
          id
          bronwerkNode {
            childMarkdownRemark {
              html
            }
          }
          titel
          titelwerk
          uitleg
          jaarwerk
          uitvoerderwerk
          picture {
            fluid(maxWidth: 300, imgixParams: { auto: "compress", fm: "jpg" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`;
