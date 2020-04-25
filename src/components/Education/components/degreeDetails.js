import React from 'react';
import PropTypes from 'prop-types';
import { DetailsContainer } from '../educationStyles';

const getSubjectHighlight = (subjects) => {
  const subjectString = subjects.join(', ');
  return subjectString;
};

const DegreeDetails = (props) => {
  const { education } = props;

  return (
    <DetailsContainer>
      <h3>
        {education.degree} <span>{education.duration}</span>
      </h3>
      {education.description.map((element) => (
        <p>- {element}</p>
      ))}
      <p>
        <span style={{ fontWeight: 'bold' }}>Subject Highlight</span>:{' '}
        {getSubjectHighlight(education.subjects)}
      </p>
    </DetailsContainer>
  );
};

DegreeDetails.propTypes = {
  education: PropTypes.shape().isRequired,
};

export default DegreeDetails;
