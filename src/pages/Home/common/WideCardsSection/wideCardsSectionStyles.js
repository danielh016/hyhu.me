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

export const CardContainer = styled.div`
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  margin: 2vh;
  width: 75vw;

  :hover {
    transform: scale(1.01, 1.01);
    transition: 0.5s;
  }
`;

export const DetailsContainer = styled.div`
  padding: 4vh;

  h3 {
    color: ${colors.gold};

    span {
      font-size: 1rem;
      color: ${colors.gray300};
    }
  }

  p {
    color: ${colors.gray700};
    margin-left: 2vw;
  }
`;
