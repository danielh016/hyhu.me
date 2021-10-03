import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MailContainer, MailTopic } from './mailStyles';
import Envelope from '../Envelope';
import MailContent from '../MailContent';

const Mail = ({ backgroundColor, letter }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { innerWidth } = window;
  const isLargeScreen = innerWidth > 900;
  const topic = `祝${letter.name}母親節快樂！`;

  const handleToggleMail = () => {
    setIsOpened(!isOpened);
  };

  return (
    <MailContainer backgroundColor={backgroundColor} isLargeScreen={isLargeScreen}>
      <MailTopic>{topic}</MailTopic>

      {isOpened ? (
        <MailContent
          onToggleMail={handleToggleMail}
          letter={letter}
          isLargeScreen={isLargeScreen}
        />
      ) : (
        <Envelope onToggleMail={handleToggleMail} isLargeScreen={isLargeScreen} />
      )}
    </MailContainer>
  );
};

Mail.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  letter: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    photo: PropTypes.string,
  }),
};

Mail.defaultProps = {
  letter: {
    name: '',
    content: '',
    photo: '',
  },
};

export default Mail;
