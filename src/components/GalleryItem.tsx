import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Illustration } from '../assets/images/utils';

const OVERLAY_DARKNESS_LEVEL = 0.5;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const darken = keyframes`
    from {
        filter: brightness(1);
    }
    to {
        filter: brightness(${OVERLAY_DARKNESS_LEVEL});
    }
`;
const brighten = keyframes`
    from {
        filter: brightness(${OVERLAY_DARKNESS_LEVEL});
    }
    to {
        filter: brightness(1);
    }
`;

interface OverlayWrapperProps {
    isOverlay: boolean;
}

const FadeInWrapper = styled.div<OverlayWrapperProps>`
    animation: ${(props) => (props.isOverlay ? fadeIn : fadeOut)} 0.5s forwards;
    grid-area: inner-div;
`;

const GalleryItemContainer = styled.div`
    display: grid;
    place-items: center;
    grid-template-areas: 'inner-div';
`;

const ImageContainer = styled.img<OverlayWrapperProps>`
    max-width: 250px;
    grid-area: inner-div;
    animation: ${(props) => (props.isOverlay ? darken : brighten)} 0.5s forwards;
`;

const OverlayText = styled.div`
    grid-area: inner-div;
    color: white;
    text-wrap: wrap;
    max-width: 210px;
    padding: 20px;

    p {
        margin: 5px;
    }
`;

export const GalleryItem = ({ details, index }: { details: Illustration; index: number }) => {
    const [isOverlay, setIsOverlay] = React.useState<boolean>(false);
    return (
        <GalleryItemContainer
            key={`${index}`}
            onMouseEnter={() => {
                setIsOverlay(true);
            }}
            onMouseLeave={() => {
                setIsOverlay(false);
            }}
        >
            <ImageContainer isOverlay={isOverlay} src={details.preview} />

            <FadeInWrapper isOverlay={isOverlay}>
                <OverlayText>
                    <p>{details.title}</p>
                    <p>✿</p>
                    <p>
                        <i>{details.category}</i>
                    </p>
                    <p>
                        <i>{details.date}</i>
                    </p>
                </OverlayText>
            </FadeInWrapper>
        </GalleryItemContainer>
    );
};
