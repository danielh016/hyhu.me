import React from 'react';
import PropTypes from 'prop-types';
import { IntroDetailContainer, IntroDetailImage } from '../introductionStyles';

const IntroDetail = (props) => {
  const { name, subtitleString, about, profileImage } = props;

  return (
    <IntroDetailContainer>
      <IntroDetailImage src={profileImage} />
      <h1>{name}</h1>
      <h3>{subtitleString}</h3>
      <p>{about}</p>
    </IntroDetailContainer>
  );
};

IntroDetail.propTypes = {
  name: PropTypes.string.isRequired,
  subtitleString: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  profileImage: PropTypes.node.isRequired,
};

export default IntroDetail;
