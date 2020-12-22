import React, { useState, useEffect } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';
import { css } from '@emotion/react';

const Uitslag = () => {
    typeof window !== 'undefined' && window.sessionStorage.setItem('withHints', true);
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
                            <StyledLink to="/vraag-1/">
                                Bekijk de hints
                            </StyledLink>
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
    color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 0 0;

    ${(props) =>
        props.showResult &&
        css`
            background-size: cover;
        `}
`;

const StyledInnerWrap = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    width: 600px;
    height: 800px;
    color: aliceblue;
    text-shadow: 4px 4px rgba(1, 1, 1, 0.8);
    text-transform: uppercase;
`;

const StyledLink = styled(Link)`
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 8px;
    font-size: 24px;
    text-decoration: none;
    margin-bottom: 60px;
`;

export default Uitslag;
