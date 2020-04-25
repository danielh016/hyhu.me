import React from 'react';
import { SectionContainer, ElementContainer } from './educationStyles';
import { EducationCard } from './components';
import websiteContent from '../../websiteContent.json';

const Education = () => {
  const { content: educations } = websiteContent.data.education;

  return (
    <SectionContainer id="education">
      <h2>Education</h2>
      <ElementContainer>
        {educations.map((education) => (
          <EducationCard education={education} />
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Education;
