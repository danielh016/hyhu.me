import React from 'react';
import PositionDetails from './positionDetails';
import { WideCardSection } from '../../common';
import websiteContent from '../../websiteContent.json';

const Experience = () => {
  const { content, type, sectionTitle } = websiteContent.data.experience;

  return (
    <WideCardSection
      sectionTitle={sectionTitle}
      type={type}
      content={content}
      DetailsComponent={PositionDetails}
    />
  );
};

export default Experience;
