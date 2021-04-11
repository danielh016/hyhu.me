import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image } from './cardImageAndNameStyles';

const Company = (props) => {
  const { imageUrl, name } = props;

  return (
    <Container>
      <Image src={imageUrl} />
      <h4>
        <span>{name}</span>
      </h4>
    </Container>
  );
};

Company.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Company;
