import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { StaticQuery, graphql } from 'gatsby';
import { HelmetDatoCms } from 'gatsby-source-datocms';

import '../styles/index.sass';

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
                        copyright
                    }
                    allDatoCmsSocialProfile(
                        sort: { fields: [position], order: ASC }
                    ) {
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
                <div className={`container ${showMenu ? 'is-open' : ''}`}>
                    <HelmetDatoCms
                        favicon={data.datoCmsSite.faviconMetaTags}
                        seo={data.datoCmsHome.seoMetaTags}
                    />
                    <header>
                        <h1>
                            {' '}
                            <Link to="/">
                                {data.datoCmsSite.globalSeo.siteName}
                            </Link>
                        </h1>
                        <nav>
                            <ul>
                                <li
                                    className={
                                        location.pathname === '/'
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <Link to="/">home</Link>
                                </li>
                                <li
                                    className={
                                        location.pathname.includes(
                                            '/tekeningen'
                                        )
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <Link to="/tekeningen">tekeningen</Link>
                                </li>
                                <li
                                    className={
                                        location.pathname.includes('/workshops')
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <Link to="/workshops">workshops</Link>
                                </li>
                                <li
                                    className={
                                        location.pathname.includes('/contact')
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    <Link to="/contact">contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>
                    {/* <div className="container__sidebar"> 
            <div className="sidebar">
              <h6 className="sidebar__title">
                <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
              </h6>
              <div
                className="sidebar__intro"
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsHome.introTextNode.childMarkdownRemark.html
                }}
              />
              <ul className="sidebar__menu">
                <li>
                  <Link to="/">Home:</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <p className="sidebar__social">
                {data.allDatoCmsSocialProfile.edges.map(({ node: profile }) => (
                  <a
                    key={profile.profileType}
                    href={profile.url}
                    target="blank"
                    className={`social social--${profile.profileType.toLowerCase()}`}
                  >
                    {" "}
                  </a>
                ))}
              </p>
              <div className="sidebar__copyright">
                {data.datoCmsHome.copyright.replace(
                  "YEAR",
                  new Date().getFullYear()
                )}
              </div>
            </div>
          </div>*/}
                    <div className="container__body">
                        {/* <div className="container__mobile-header">
              <div className="mobile-header">
                <div className="mobile-header__menu">
                  <a
                    href="#"
                    onClick={e => {
                      e.preventDefault();
                      setShowMenu(!showMenu);
                    }}
                  />
                </div>
                <div className="mobile-header__logo">
                  <Link to="/">{data.datoCmsSite.globalSeo.siteName}</Link>
                </div>
              </div>
            </div> */}
                        {children}
                    </div>
                    <footer>
                        <span>{data.datoCmsHome.addressText}</span>
                        <span>{data.datoCmsHome.telephone}</span>
                        <span>{data.datoCmsHome.email}</span>
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
