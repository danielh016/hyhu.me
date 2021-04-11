import styled from 'styled-components';
import MothersDayImage from './assets/mothersDay.jpg';

import { colors } from './utils/styles';

export const CoverPageContainer = styled.div`
  align-items: center;
  background: ${colors.white};
  background: radial-gradient(circle, ${colors.white} 0%, ${colors.pink} 100%);
  display: flex;
  height: 100vmin;
  justify-content: center;
  width: 100%;
`;

export const HappyMothersDayImage = styled.div`
  background: url(${MothersDayImage}) no-repeat center;
  background-size: cover;
  border-radius: 50%;
  box-shadow: 25px 25px 50px 0 ${colors.white} inset, -25px -25px 50px 0 ${colors.white} inset,
    5px 5px 5px grey;
  height: 50vmin;
  width: 80vmin;

  :hover {
    transform: scale(1.02, 1.02);
  }
`;
