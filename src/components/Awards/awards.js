import React from 'react';
import AwardDetails from './awardDetails';
import { WideCardSection } from '../../common';
import websiteContent from '../../websiteContent.json';

const Awards = () => {
  const { content, type, sectionTitle } = websiteContent.data.awards;

  return (
    <WideCardSection
      sectionTitle={sectionTitle}
      type={type}
      content={content}
      DetailsComponent={AwardDetails}
    />
  );
};

export default Awards;
