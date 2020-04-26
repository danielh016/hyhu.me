import React from 'react';
import { SectionContainer, ElementContainer } from './educationStyles';
import { EducationCard } from './components';
import websiteContent from '../../websiteContent.json';

const Education = () => {
  const { content: educations, type, sectionTitle } = websiteContent.data.education;

  return (
    <SectionContainer id={type}>
      <h2>{sectionTitle}</h2>
      <ElementContainer>
        {educations.map((education) => (
          <EducationCard education={education} />
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Education;
