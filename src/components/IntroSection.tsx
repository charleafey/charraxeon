import React from 'react';
import styled from 'styled-components';
import headerImage from '../assets/images/business-card-front.jpeg';
import InstaIcon from '../assets/icons/instagram-icon.svg';

const SOCIALS_LINK = 'https://instagram.com/charraxeon';

const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    color: rgb(140, 83, 76);
    margin-bottom: 8px;
`;

const Pronouns = styled.p`
    margin-top: 8px;
    color: rgb(140, 83, 76);
`;

const Description = styled.p`
    max-width: 400px;
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

const IconButton = styled.a`
    svg:hover {
        color: red;
    }
`;

export const IntroSection: React.FC = () => {
    return (
        <IntroWrapper>
            <HeaderImage src={headerImage} />
            <Title>charraxeon</Title>
            <Pronouns>
                <i>(they/them)</i>
            </Pronouns>
            <Description>
                Hi there, I&apos;m Charley! I create artwork with a warm, soft style, plenty of colours and a sprinkle
                of magic.
            </Description>
            <IconButton href={SOCIALS_LINK} target="_blank">
                <svg fill="#000000" width="35px" height="35px" viewBox="0 0 32 32">
                    <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z" />
                    <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z" />
                </svg>
            </IconButton>
        </IntroWrapper>
    );
};
