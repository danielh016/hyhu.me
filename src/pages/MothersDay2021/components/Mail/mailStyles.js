import styled from 'styled-components';

import { colors } from '../../utils/styles';

export const MailContainer = styled.div`
  align-items: center;
  background: ${colors.white};
  background: radial-gradient(circle, ${colors.white} 0%, ${(props) => props.backgroundColor} 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2em 0;
  width: 100%;
`;

export const MailTopic = styled.h2``;
