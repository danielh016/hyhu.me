import styled from 'styled-components';

export const ImageOverlay = styled.div`
  left: 50%;
  opacity: 0;
  position: absolute;
  text-align: center;
  top: 50%;
  transition: 0.5s ease;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;

export const EnvelopeImageComponent = styled.img`
  backface-visibility: hidden;
  height: 50vmin;
  object-fit: contain;
  opacity: 1;
  transition: 0.5s ease;
`;

export const ImageContainer = styled.div`
  box-shadow: ${(props) => (props.isLargeScreen ? `5px 5px 5px` : `3px 3px 3px`)} grey;
  cursor: pointer;
  margin: 5em;
  position: relative;

  &:hover ${ImageOverlay} {
    opacity: 1;
  }

  &:hover ${EnvelopeImageComponent} {
    opacity: 0.5;
  }
`;
