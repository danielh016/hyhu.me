import React from 'react';

import { CoverPageContainer, HappyMothersDayImage } from './mothersDay2021Styles';
import { colors } from './utils/styles';
import { assignLetterPhoto } from './utils';
import { Mail } from './components';
import letterContents from './data/letters.json';

const MothersDay2021 = () => {
  const { letters } = letterContents;
  const updatedLetters = assignLetterPhoto(letters);

  return (
    <>
      <CoverPageContainer>
        <HappyMothersDayImage />
      </CoverPageContainer>
      {updatedLetters.map((letter, i) => {
        const backgroundColor = i % 2 === 0 ? colors.lightPink : colors.pink;
        return <Mail backgroundColor={backgroundColor} key={letter.key} letter={letter} />;
      })}
    </>
  );
};

MothersDay2021.propTypes = {};

export default MothersDay2021;
