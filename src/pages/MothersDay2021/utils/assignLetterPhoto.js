import FathersSideGrandmaImage from '../assets/fathersSide.jpg';
import MomAdditionalImage from '../assets/momAdditional.jpg';
import MomImage from '../assets/mom.jpg';
import MothersSideGrandmaImage from '../assets/mothersSide.jpg';

const selectPhoto = (key) => {
  switch (key) {
    case 'fathersSideGrandma':
      return FathersSideGrandmaImage;
    case 'mothersSideGrandma':
      return MothersSideGrandmaImage;
    case 'mom':
      return MomImage;
    default:
      return '';
  }
};

const assignLetterPhoto = (letters) => {
  return letters.map((letter) => {
    const photo = selectPhoto(letter.key);

    if (letter.key === 'mom') {
      return {
        ...letter,
        photo,
        additionalPhoto: MomAdditionalImage,
      };
    }

    return {
      ...letter,
      photo,
    };
  });
};

export default assignLetterPhoto;
