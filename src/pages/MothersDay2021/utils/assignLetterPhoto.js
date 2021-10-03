import FathersSideGrandmaAdditionalImage from '../assets/fathersSideAdditional.jpg';
import FathersSideGrandmaImage from '../assets/fathersSide.jpg';
import MomAdditionalImage from '../assets/momAdditional.jpg';
import MomImage from '../assets/mom.jpg';
import MothersSideGrandmaAdditionalImage from '../assets/mothersSideAdditional.jpg';
import MothersSideGrandmaImage from '../assets/mothersSide.jpg';

const selectPhoto = (key) => {
  switch (key) {
    case 'fathersSideGrandma':
      return {
        photo: FathersSideGrandmaImage,
        additionalPhoto: FathersSideGrandmaAdditionalImage,
      };
    case 'mothersSideGrandma':
      return {
        photo: MothersSideGrandmaImage,
        additionalPhoto: MothersSideGrandmaAdditionalImage,
      };
    case 'mom':
      return {
        photo: MomImage,
        additionalPhoto: MomAdditionalImage,
      };
    default:
      return {};
  }
};

const assignLetterPhoto = (letters) => {
  return letters.map((letter) => {
    const photoObject = selectPhoto(letter.key);

    return {
      ...letter,
      ...photoObject,
    };
  });
};

export default assignLetterPhoto;
