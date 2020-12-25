import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';

const IndexPage = () => {
    typeof window !== 'undefined' && window.sessionStorage.setItem('withHints', false);

    const data = useStaticQuery(
        graphql`
            query {
                desktop: file(
                    relativePath: { eq: "wie-is-de-suprisemaker.png" }
                ) {
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

    return (
        <Layout>
            <SEO title="Home" />
            <StyledBackgroundSection fluid={imageData}>
                    <StyledInnerWrap>
                        <StyledLink to="/vraag-1/">Ga naar vraag 1</StyledLink>
                    </StyledInnerWrap>
            </StyledBackgroundSection>
        </Layout>
    );
};

const StyledBackgroundSection = styled(BackgroundImage)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
`;

const StyledInnerWrap = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    align-items: center;
    width: 600px;
    height: 800px;
    text-shadow: 4px 4px rgba(1, 1, 1, 0.8);
    text-transform: uppercase;
`;

const StyledLink = styled(Link)`
    border: 1px solid white;
    border-radius: 5px;
    padding: 8px;
    font-size: 24px;
    text-decoration: none;
    margin-bottom: 60px;
`;

export default IndexPage;
