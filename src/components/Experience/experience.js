import React from 'react';
import { SectionContainer, ElementContainer } from './experienceStyles';
import { ExperienceCard } from './components';
import websiteContent from '../../websiteContent.json';

const Experience = () => {
  const { content: experiences, type, sectionTitle } = websiteContent.data.experience;

  return (
    <SectionContainer id={type}>
      <h2>{sectionTitle}</h2>
      <ElementContainer>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Experience;
