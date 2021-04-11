import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { ImageContainer, EnvelopeImageComponent, ImageOverlay } from './envelopeStyles';

import EnvelopeImage from '../../assets/envelope.png';

const Envelope = ({ onToggleMail, isLargeScreen }) => {
  return (
    <ImageContainer onClick={onToggleMail} isLargeScreen={isLargeScreen}>
      <EnvelopeImageComponent src={EnvelopeImage} alt="Envelope" />
      <ImageOverlay>
        <Button>拆開這封信</Button>
      </ImageOverlay>
    </ImageContainer>
  );
};

Envelope.propTypes = {
  isLargeScreen: PropTypes.bool,
  onToggleMail: PropTypes.func.isRequired,
};

Envelope.defaultProps = {
  isLargeScreen: true,
};

export default Envelope;
