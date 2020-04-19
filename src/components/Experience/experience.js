import React from 'react';
import { SectionContainer, ElementContainer, ExperienceCard } from './experienceStyles';
import websiteContent from '../../websiteContent.json';

const Experience = () => {
  const { content: experiences } = websiteContent.data.experience;

  return (
    <SectionContainer id="experience">
      <h2>Experience</h2>
      <ElementContainer>
        {experiences.map((experience) => (
          <ExperienceCard>
            <h3>
              {experience.title} <span>{experience.duration}</span>
            </h3>
            <h4>{experience.company}</h4>
            {experience.description.map((element) => (
              <p>- {element}</p>
            ))}
          </ExperienceCard>
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Experience;
