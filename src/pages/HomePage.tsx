import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

const Title = styled.h1`
    font-size: 4em;
    text-align: center;
    color: rgb(140, 83, 76);
`;

const IntroWrapper = styled.section`
    text-align: center;
`; // background: papayawhip;

const PageContainer = styled(Container)`
    background: papayawhip;
    padding: 4em;
    align-items: center;
    justify-content: center;
    display: flex;
`;

export const HomePage: React.FC = () => {
    return (
        <PageContainer fluid="md">
            <IntroWrapper>
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
