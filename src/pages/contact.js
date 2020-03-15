import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const ContactPage = ({ data, location }) => {
  console.log(data);
  const [sent, setSent] = useState(false);
  const [processed, setProcessed] = useState(false);
  const submitForm = e => {
    e.preventDefault();
    if (processed) return;
    setProcessed(true);
    console.log(e);
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    console.log(name, email, message);
    
    fetch("https://europe-west1-a-and-g.cloudfunctions.net/contactForm", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      })
        .then(x => x.json())
        .then(y => {
          console.log(y);
        });
    
    setSent(true);



  };
  return (
    <Layout location={location}>
      {sent ? (
        <p className="contact-sent">Bedankt voor je bericht!</p>
      ) : (
        <form onSubmit={submitForm}>
          <div className="input-wrap">
            <label htmlFor="name">Naam</label>
            <input required type="text" id="name" name="name"></input>
          </div>
          <div className="input-wrap">
            <label htmlFor="email">Email</label>
            <input required type="email" id="email" name="email"></input>
          </div>
          <div className="input-wrap">
            <label htmlFor="message">Bericht</label>
            <textarea
              cols="60"
              rows="5"
              required
              type="text"
              id="message"
              name="message"
            ></textarea>
          </div>

          <div className="input-wrap">
            <input className="button" type="submit" value="Verstuur"></input>
          </div>
        </form>
      )}
    </Layout>
  );
};

export default ContactPage;

export const query = graphql`
  query ContactQuery {
    datoCmsHome {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      introTextNode {
        childMarkdownRemark {
          html
        }
      }
      address {
        latitude
        longitude
      }
      addressText
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
