import React from 'react';
import PropTypes from 'prop-types';
import { SectionContainer, ElementContainer } from './wideCardsSectionStyles';
import WideCard from './wideCard';

const WideCardSection = (props) => {
  const { content: contents, type, sectionTitle, DetailsComponent } = props;

  return (
    <SectionContainer id={type}>
      <h2>{sectionTitle}</h2>
      <ElementContainer>
        {contents.map((content) => (
          <WideCard content={content} DetailsComponent={DetailsComponent} />
        ))}
      </ElementContainer>
    </SectionContainer>
  );
};

WideCardSection.propTypes = {
  content: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  type: PropTypes.string,
  sectionTitle: PropTypes.string,
  DetailsComponent: PropTypes.node,
};

const DefaultDetailsComponent = () => <></>;

WideCardSection.defaultProps = {
  type: '',
  sectionTitle: '',
  DetailsComponent: DefaultDetailsComponent,
};

export default WideCardSection;
