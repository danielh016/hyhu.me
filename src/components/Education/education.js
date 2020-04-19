import React from 'react';
import { SectionContainer, ElementContainer, EducationCard } from './educationStyles';
import websiteContent from '../../websiteContent.json';

const getSubjectHighlight = (subjects) => {
  const subjectString = subjects.join(', ');
  return subjectString;
};

const Education = () => {
  const { content: educations } = websiteContent.data.education;

  return (
    <SectionContainer id="education">
      <h2>Education</h2>
      <ElementContainer>
        {educations.map((education) => (
          <EducationCard>
            <h3>
              {education.school} <span>{education.duration}</span>
            </h3>
            <h4>{education.degree}</h4>
            {education.description.map((element) => (
              <p>- {element}</p>
            ))}
            <p>
              <span style={{ fontWeight: 'bold' }}>Subject Highlight</span>:{' '}
              {getSubjectHighlight(education.subjects)}
            </p>
          </EducationCard>
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

export default Education;
