import styled from 'styled-components';
import { colors } from '../../utils/styleVariables';

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.gray600};
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 3vh 0;

  h4 {
    color: ${colors.gray100};
    text-align: center;

    span {
      font-size: 1.5rem;
    }
  }
`;

export const Image = styled.img`
  border-color: ${colors.gray300};
  border-radius: 50%;
  border-style: solid;
  border-width: 5px;
  height: 18vh;
  margin-bottom: 2vh;
  object-fit: cover;
  width: 18vh;
`;
