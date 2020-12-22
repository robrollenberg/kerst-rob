import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const Question1 = () => {
    const withHints = typeof window !== 'undefined' && window.sessionStorage.getItem('withHints')
        ? window.sessionStorage.getItem('withHints') == 'true'
        : false;

    const answers = [
        { value: 'a', label: 'Het is al na 12.00, dus ...' },
        { value: 'b', label: 'Chocomelk' },
        { value: 'c', label: 'Water' },
        { value: 'd', label: 'Rooibos thee' },
        { value: 'e', label: 'Wat mag ik?' },
        { value: 'f', label: 'Wijnen, wijnen, wijnen' },
        { value: 'g', label: 'Spa blauw' },
        { value: 'h', label: 'Geen idee, zat niet op te letten' },
    ];

    function checkAnswer(answer) {
        if (answer === 'h') {
            // correct answer
        } else {
            // incorrect answer
        }
        navigate('/vraag-2');
    }

    return (
        <Layout>
            <SEO title="Vraag 1" />
            <StyledContainer>
                <Wrapper>
                    <QuestionWrapper>
                        <h2>
                            1. Welk antwoord gaf <em>de suprisemaker</em> op de
                            vraag: Wat wil je drinken?
                        </h2>
                    </QuestionWrapper>

                    <AnswersWrapper>
                        {answers.map((item) => (
                            <Answer
                                key={item.value}
                                onClick={() => checkAnswer(item.value)}
                            >
                                <AnswerButton />{' '}
                                {withHints && item.value === 'd' ? (
                                    <span>
                                        <Hint>R</Hint>o<Hint>o</Hint>i
                                        <Hint>b</Hint>os thee
                                    </span>
                                ) : (
                                    item.label
                                )}
                            </Answer>
                        ))}
                    </AnswersWrapper>
                    <Link to="/">Ga terug</Link>
                </Wrapper>
            </StyledContainer>
        </Layout>
    );
};

export default Question1;

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    color: white;
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
