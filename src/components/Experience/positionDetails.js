import React from 'react';
import PropTypes from 'prop-types';
import { DetailsContainer } from './experienceStyles';

const PositionDetails = (props) => {
  const { content: experience } = props;

  return (
    <DetailsContainer>
      <h3>
        {experience.title} <span>{experience.duration}</span>
      </h3>
      {experience.description.map((element) => (
        <p key={element}>- {element}</p>
      ))}
    </DetailsContainer>
  );
};

PositionDetails.propTypes = {
  content: PropTypes.shape().isRequired,
};

export default PositionDetails;
