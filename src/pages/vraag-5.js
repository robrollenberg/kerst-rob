import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const Question2 = () => {
    const withHints = window.sessionStorage.getItem('withHints')
        ? window.sessionStorage.getItem('withHints') == 'true'
        : false;

    let answers = [
        { value: 'a', label: 'Opa' },
        { value: 'b', label: 'Jasper' },
        { value: 'c', label: 'Roel' },
        { value: 'd', label: 'Oma' },
        { value: 'e', label: 'Mama' },
        { value: 'f', label: 'Jente' },
    ];

    if (withHints) {
        answers = [
            { value: 'a', label: 'Papa' },
            { value: 'b', label: 'Rob' },
            { value: 'c', label: 'Papa' },
            { value: 'd', label: 'Papa' },
            { value: 'e', label: 'Rob' },
            { value: 'f', label: 'Rob' },
        ];
    }

    function checkAnswer(answer) {
        navigate('/uitslag');
    }

    return (
        <Layout>
            <SEO title="Vraag 5" />
            <StyledContainer>
                <Wrapper>
                    <QuestionWrapper>
                        <h2>5. Wie is de suprisemaker?</h2>
                    </QuestionWrapper>

                    <AnswersWrapper>
                        {answers.map((item) => (
                            <Answer
                                key={item.value}
                                onClick={() => checkAnswer(item.value)}
                            >
                                <AnswerButton /> {item.label}
                            </Answer>
                        ))}
                    </AnswersWrapper>
                    <Link to="/">Ga terug</Link>
                </Wrapper>
            </StyledContainer>
        </Layout>
    );
};

export default Question2;

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
