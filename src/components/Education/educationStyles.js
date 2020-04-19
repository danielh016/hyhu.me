import styled from 'styled-components';
import { colors } from '../../utils/styleVariables';

export const SectionContainer = styled.div`
  padding: 7vh;

  h2 {
    text-align: center;
    margin: 3vh;
  }
`;

export const ElementContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const EducationCard = styled.div`
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  margin: 2vh;
  padding: 4vh;
  width: 75vw;

  h3 {
    color: ${colors.gold};
  }

  h3 > span {
    font-size: 1rem;
    color: ${colors.gray300};
  }

  h4 {
    color: ${colors.gray900};
  }

  p {
    color: ${colors.gray700};
    margin-left: 2vw;
  }

  :hover {
    transform: scale(1.01, 1.01);
    transition: 0.5s;
  }
`;
