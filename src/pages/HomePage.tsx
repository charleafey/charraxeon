import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
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
`;

const HeaderImage = styled.img`
    margin-top: 5em;
    width: 85%;
    max-width: 400px;
`;

const PageContainer = styled(Container)`
    background: papayawhip;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const HomePage: React.FC = () => {
    return (
        <PageContainer fluid="md">
            <IntroWrapper>
                <HeaderImage src={headerImage} />
                <Title>charraxeon</Title>
                <p>(they/them)</p>
                <p>
                    Hi there, I&apos;m Charley! I create illutrations and merchandise with a warm and soft style.
                    I&apos;m inspired by how light forms colour and shapes around me, and do my best to imbue some of
                    its magic into my artwork. I also love cats and nature!
                </p>
            </IntroWrapper>
        </PageContainer>
    );
};
