import React from 'react';
import PropTypes from 'prop-types';
import { DetailsContainer } from './awardsStyles';

const AwardDetails = (props) => {
  const { content: award } = props;

  return (
    <DetailsContainer>
      <h3>
        {award.title} <span>{award.date}</span>
      </h3>
      <p>{award.description}</p>
    </DetailsContainer>
  );
};

AwardDetails.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default AwardDetails;
