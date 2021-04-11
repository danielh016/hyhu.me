import styled from 'styled-components';
import { colors } from '../../utils/styleVariables';

// eslint-disable-next-line import/prefer-default-export
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
