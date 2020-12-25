/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");

          ${emotionNormalize}
          html,
          body {
            padding: 0;
            margin: 0;
            background: #111;
            font-family: "PT Mono", monospace;
            color: rgba(255, 255, 255, 0.7);
            width: 100vw;
            height: 100vh;

            @media not all and (hover: hover) {
              height: var(--app-height);
            }
          }
          h2 {
            color: inherit;
            font-size: 28px;
          }
          a {
            color: inherit;
          }
        `}
      />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
