import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import "../styles/index.sass";

const TemplateWrapper = ({ children, location }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsHome {
            addressText
            telephone
            email
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
            introTextNode {
              childMarkdownRemark {
                html
              }
            }
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <div className={`container ${showMenu ? "is-open" : ""}`}>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <header>
            <h1>
              {" "}
              <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
            </h1>
            <nav className="main-nav">
              <ul>
                <li className={location.pathname === "/" ? "active" : ""}>
                  <Link to="/">home</Link>
                </li>
                <li
                  className={
                    location.pathname.includes("/tekeningen") ? "active" : ""
                  }
                >
                  <Link to="/tekeningen">tekeningen</Link>
                </li>
                <li
                  className={
                    location.pathname.includes("/workshops") ? "active" : ""
                  }
                >
                  <Link to="/workshops">workshops</Link>
                </li>
                <li
                  className={
                    location.pathname.includes("/contact") ? "active" : ""
                  }
                >
                  <Link to="/contact">contact</Link>
                </li>

                <li
                  className={
                    location.pathname.includes("/believers") ? "active" : ""
                  }
                >
                  <Link to="/believers">believers</Link>
                </li>
              </ul>
            </nav>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className={
                showMenu ? "menu-open clickHamburger" : "clickHamburger"
              }
            >
              <div className="hamburger"></div>
            </button>
          </header>
          <nav className={showMenu ? "menu-open mobile-nav" : "mobile-nav"}>
            <ul>
              <li className={location.pathname === "/" ? "active" : ""}>
                <Link to="/">home</Link>
              </li>
              <li
                className={
                  location.pathname.includes("/tekeningen") ? "active" : ""
                }
              >
                <Link to="/tekeningen">tekeningen</Link>
              </li>
              <li
                className={
                  location.pathname.includes("/workshops") ? "active" : ""
                }
              >
                <Link to="/workshops">workshops</Link>
              </li>
              <li
                className={
                  location.pathname.includes("/contact") ? "active" : ""
                }
              >
                <Link to="/contact">contact</Link>
              </li>
            </ul>
          </nav>
          <div className="container__body">{children}</div>
          <footer>
            <div className="footer-social">
              <div>Meer werk door A&G. Volg ons op:</div>
              <div>
                <a
                  className="social-icon"
                  href={
                    data.allDatoCmsSocialProfile.edges
                      .map(x => x.node)
                      .find(x => x.profileType === "Facebook").url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="./icon-facebook.svg"></img>
                </a>

                <a
                  className="social-icon"
                  href={
                    data.allDatoCmsSocialProfile.edges
                      .map(x => x.node)
                      .find(x => x.profileType === "Instagram").url
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icon-instagram.svg"></img>
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <span>{data.datoCmsHome.addressText}</span>
              <span>{data.datoCmsHome.telephone}</span>
              <span>{data.datoCmsHome.email}</span>
            </div>
          </footer>
        </div>
      )}
    />
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object
};

export default TemplateWrapper;
