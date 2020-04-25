import React from 'react';
import { SectionContainer, ElementContainer } from './experienceStyles';
import { ExperienceCard } from './components';
import websiteContent from '../../websiteContent.json';

const Experience = () => {
  const { content: experiences } = websiteContent.data.experience;

  return (
    <SectionContainer id="experience">
      <h2>Experience</h2>
      <ElementContainer>
        {experiences.map((experience) => (
          <ExperienceCard experience={experience} />
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Experience;
