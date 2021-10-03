import React from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { MailPaper, MailText, MailPhoto } from './mailContentStyles';

const MailContent = ({ onToggleMail, letter, isLargeScreen }) => {
  const { additionalPhoto, content, photo } = letter;

  return (
    <MailPaper isLargeScreen={isLargeScreen}>
      <MailPhoto
        src={photo}
        alt="Support"
        position={{ right: true }}
        isLargeScreen={isLargeScreen}
      />

      <MailText>{content}</MailText>

      {additionalPhoto && (
        <MailPhoto
          src={additionalPhoto}
          alt="Support"
          position={{ left: true }}
          isLargeScreen={isLargeScreen}
        />
      )}

      <Button onClick={onToggleMail}>將信件裝回信封</Button>
    </MailPaper>
  );
};

MailContent.propTypes = {
  isLargeScreen: PropTypes.bool,
  onToggleMail: PropTypes.func.isRequired,
  letter: PropTypes.shape({
    additionalPhoto: PropTypes.string,
    content: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
  }),
};

MailContent.defaultProps = {
  isLargeScreen: true,
  letter: {
    additionalPhoto: '',
    content: '',
    name: '',
    photo: '',
  },
};

export default MailContent;
