import React from 'react';
import styled from 'styled-components';

import { galleryImages } from '../assets/images/utils';

const ImageContainer = styled.img`
    max-width: 300px;
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
            <h2>Illustrations</h2>
            <GalleryContainer>
                {galleryImages.map((image, key) => (
                    <div key={`${key}`}>
                        <ImageContainer src={image.image} />
                        <p>{image.date}</p>
                    </div>
                ))}
            </GalleryContainer>
        </div>
    );
};
