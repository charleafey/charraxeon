import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import { IntroSection } from '../components/IntroSection';
import { PrintSection } from '../components/PrintSection';

const PageContainer = styled(Container)`
    background: rgb(255, 243, 213);
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const HomePage: React.FC = () => {
    return (
        <PageContainer fluid="md">
            <IntroSection />
            <PrintSection />
        </PageContainer>
    );
};
