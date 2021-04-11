import React from 'react';
import DegreeDetails from './degreeDetails';
import { WideCardSection } from '../../common';
import websiteContent from '../../data/websiteContent.json';

const Education = () => {
  const { content, type, sectionTitle } = websiteContent.data.education;

  return (
    <WideCardSection
      sectionTitle={sectionTitle}
      type={type}
      content={content}
      DetailsComponent={DegreeDetails}
    />
  );
};

export default Education;
