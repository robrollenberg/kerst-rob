import React, { useState, useEffect } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";
import { css } from "@emotion/react";

const Uitslag = () => {
  typeof window !== "undefined" &&
    window.sessionStorage.setItem("withHints", true);
  const [showResult, setShowResult] = useState(false);

  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "uitslag.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  useEffect(function () {
    setTimeout(() => setShowResult(true), 3000);
  }, []);

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <Layout>
      <SEO title="Home" />
      <>
        {showResult ? (
          <StyledContainer fluid={imageData} showResult={showResult}>
            <StyledInnerWrap>
              <WrapperUitleg>
                <p>
                  Je had bijna alles goed. Je mag de kluis zo open maken. De
                  code is draai naar rechts tot 10. Draai daarna linksom naar
                  30.
                </p>{" "}
                <p>Wil je de verborgen hints nog zien?</p>
              </WrapperUitleg>
              <StyledLink to="/vraag-1/">Bekijk de hints</StyledLink>
            </StyledInnerWrap>
          </StyledContainer>
        ) : null}
      </>
    </Layout>
  );
};

const StyledContainer = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 0 0;

  ${(props) =>
    props.showResult &&
    css`
      background-size: contain;
    `}
`;

const StyledInnerWrap = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  width: 600px;
  height: 800px;
`;

const StyledLink = styled(Link)`
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 8px;
  font-size: 24px;
  text-decoration: none;
  margin-bottom: 100px;

  text-transform: uppercase;
`;

const WrapperUitleg = styled.div`
  color: #252525;
  padding: 20px;
`;

export default Uitslag;
