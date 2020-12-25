import React, { useState } from "react";
import { graphql, Link, navigate, useStaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "@emotion/styled";
import BackgroundImage from "gatsby-background-image";

const Question1 = () => {
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
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;

  const withHints =
    typeof window !== "undefined" && window.sessionStorage.getItem("withHints")
      ? window.sessionStorage.getItem("withHints") == "true"
      : false;

  const answers = [
    { value: "a", label: "Het is al na 12.00, dus ..." },
    { value: "b", label: "Chocomelk" },
    { value: "c", label: "Water" },
    { value: "d", label: "Rooibos thee" },
    { value: "e", label: "Wat mag ik?" },
    { value: "f", label: "Wijnen, wijnen, wijnen" },
    { value: "g", label: "Spa blauw" },
    { value: "h", label: "Geen idee, zat niet op te letten" },
  ];

  function checkAnswer(answer) {
    if (answer === "h") {
      // correct answer
    } else {
      // incorrect answer
    }
    navigate("/vraag-2");
  }

  return (
    <Layout>
      <SEO title="Vraag 1" />
      <StyledContainer fluid={imageData}>
        <Wrapper>
          <QuestionWrapper>
            <h2>
              1. Welk antwoord gaf <em>de suprisemaker</em> op de vraag: Wat wil
              je drinken?
            </h2>
          </QuestionWrapper>

          <AnswersWrapper>
            {answers.map((item) => (
              <Answer key={item.value} onClick={() => checkAnswer(item.value)}>
                <AnswerButton />{" "}
                {withHints && item.value === "d" ? (
                  <span>
                    <Hint>R</Hint>o<Hint>o</Hint>i<Hint>b</Hint>os thee
                  </span>
                ) : (
                  item.label
                )}
              </Answer>
            ))}
          </AnswersWrapper>
          <LinkWrapper>
            <Link to="/">Begin overnieuw</Link>
            {withHints ? <Link to="/vraag-2">Ga verder</Link> : null}
          </LinkWrapper>
        </Wrapper>
      </StyledContainer>
    </Layout>
  );
};

export default Question1;

const StyledContainer = styled(BackgroundImage)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 600px;
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

const Hint = styled.span`
  color: yellow;
  font-size: 20px;
  font-weight: bolder;
  text-decoration: underline;
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
