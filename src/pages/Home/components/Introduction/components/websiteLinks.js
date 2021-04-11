import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { WebsiteLinksContainer, CircleLinks } from '../introductionStyles';

const WebsiteLinks = (props) => {
  const { links } = props;

  return (
    <WebsiteLinksContainer>
      <CircleLinks href={links.github}>
        <FaGithub />
      </CircleLinks>
      <CircleLinks href={links.linkedin}>
        <FaLinkedin />
      </CircleLinks>
      <CircleLinks href={links.medium}>
        <FaMedium />
      </CircleLinks>
    </WebsiteLinksContainer>
  );
};

WebsiteLinks.propTypes = {
  links: PropTypes.shape().isRequired,
};

export default WebsiteLinks;
