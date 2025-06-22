import React from 'react';
import styled from 'styled-components';

import { galleryDesigns, galleryImages } from '../assets/images/utils';
import { GalleryItem } from './GalleryItem';

const ImageContainer = styled.img`
    max-width: 250px;
`;

const Heading = styled.h1`
    font-size: 2em;
    text-align: center;
    color: rgb(140, 83, 76);
`;

const GalleryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
`;

export const PrintSection: React.FC = () => {
    return (
        <div>
            <Heading>Illustrations</Heading>
            <p>(2023-2025)</p>
            <GalleryContainer>
                {galleryImages.map((image, index) => (
                    <GalleryItem details={image} index={index} key={index} />
                ))}
            </GalleryContainer>
            <Heading>Designs</Heading>
            <p>(2024-2025)</p>
            <GalleryContainer>
                {galleryDesigns.map((image, index) => (
                    <GalleryItem details={image} index={index} key={index} />
                ))}
            </GalleryContainer>
        </div>
    );
};
