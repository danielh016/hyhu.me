import styled from 'styled-components';

import { colors } from '../../utils/styles';

export const StyledButton = styled.div`
  background-color: ${colors.darkPink};
  box-shadow: 3px 3px 3px grey;
  color: ${colors.white};
  font-size: 1em;
  transition: 0.2s ease;
  padding: 1em 2em;
  width: fit-content;

  :hover {
    opacity: 0.5;
  }
`;
