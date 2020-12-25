import React, { useState } from "react";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";
import { css } from "@emotion/react";

const Question3 = () => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "bg-2.webp" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktop1: file(relativePath: { eq: "rob-bg.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 900) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  // Set ImageData.
  const imageDataWithHint = data.desktop1.childImageSharp.fluid;

  const withHints =
    typeof window !== "undefined" && window.sessionStorage.getItem("withHints")
      ? window.sessionStorage.getItem("withHints") == "true"
      : false;

  const answers = [
    { value: "a", label: "Goesmet" },
    { value: "b", label: "Goermet" },
    { value: "c", label: "Gourmeth" },
    { value: "d", label: "Gourmet" },
    { value: "e", label: "Gour met (met mayonaise net als patatje met" },
    { value: "f", label: "Pizza" },
    { value: "g", label: "Al Goremet" },
    {
      value: "h",
      label:
        "Iets met een hete plaat en bakjes en maximaal 3 stukjes erop...EN NIET MET JE VORK ERIN PRIKKEN",
    },
  ];

  function checkAnswer(answer) {
    navigate("/vraag-4");
  }

  return (
    <Layout>
      <SEO title="Vraag 3" />
      <StyledContainer
        fluid={withHints ? imageDataWithHint : imageData}
        withHints={withHints}
      >
        <Wrapper withHints={withHints}>
          <QuestionWrapper>
            <h2>
              3. Wat eet <em>de suprisemaker</em> vanavond als kerstmaal?
            </h2>
          </QuestionWrapper>

          <AnswersWrapper>
            {answers.map((item) => (
              <Answer key={item.value} onClick={() => checkAnswer(item.value)}>
                <AnswerButton /> {item.label}
              </Answer>
            ))}
          </AnswersWrapper>
          <LinkWrapper>
            <Link to="/">Begin overnieuw</Link>
            {withHints ? <Link to="/vraag-4">Ga verder</Link> : null}
          </LinkWrapper>
        </Wrapper>
      </StyledContainer>
    </Layout>
  );
};

export default Question3;

const StyledContainer = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.withHints &&
    css`
      background-size: 30px;
      background-repeat: repeat;
    `}
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;

  ${(props) =>
    props.withHints &&
    css`
      background: rgba(1, 1, 1, 0.8);
      border-radius: 5px;
      padding: 20px;
    `}
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: auto;
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: auto;
`;

const Answer = styled.div`
  flex: 0 1 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
`;

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AnswerButton = styled.button`
  background-color: #4caf50; /* Green */
  background-image: radial-gradient(
    90deg,
    rgba(255, 255, 255, 0.8),
    rgb(2, 125, 60),
    rgb(2, 125, 60),
    rgb(2, 125, 60)
  );
  border: none;
  border-radius: 5px;
  color: white;
  width: 28px;
  height: 28px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: 20px;
`;
