import React from 'react';
import styled from 'styled-components';
import headerImage from '../assets/images/business-card-front.jpeg';

const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    color: rgb(140, 83, 76);
`;

const IntroWrapper = styled.section`
    text-align: center;
    height: 100vh;
    max-width: 700px;
    padding: 0 1em 0 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const HeaderImage = styled.img`
    width: 85%;
    max-width: 600px;
`;

export const IntroSection: React.FC = () => {
    return (
        <IntroWrapper>
            <HeaderImage src={headerImage} />
            <Title>charraxeon</Title>
            <p>
                <i>(they/them)</i>
            </p>
            <p>
                Hi there, I&apos;m Charley! I create illutrations and merchandise with a warm and soft style. I&apos;m
                inspired by how light forms colour and shapes around me, and do my best to imbue some of its magic into
                my artwork.
            </p>
        </IntroWrapper>
    );
};
