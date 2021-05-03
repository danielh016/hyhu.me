import styled from 'styled-components';

import { colors } from '../../utils/styles';

export const MailPaper = styled.div`
  background-color: ${colors.white};
  border: solid ${colors.blue} ${(props) => (props.isLargeScreen ? `2em` : `0.5em`)};
  box-shadow: 5px 5px 5px grey;
  margin: ${(props) => (props.isLargeScreen ? `2em` : `0.5em`)};
  padding: ${(props) => (props.isLargeScreen ? `2em` : `0.5em`)};
  width: ${(props) => (props.isLargeScreen ? `80%` : `95%`)};
`;

export const MailText = styled.p`
  font-size: 1em;
  text-align: justify;
  white-space: pre-wrap;
`;

export const MailPhoto = styled.img`
  box-shadow: 5px 5px 5px grey;
  height: ${(props) => props.isLargeScreen && `50vmin`};
  margin-bottom: 1em;
  object-fit: contain;
  width: ${(props) => (props.isLargeScreen ? `55%` : `100%`)};

  ${(props) =>
    props.position.right &&
    `
      float: right;
      margin-left: 2em;

      :hover {
        transform: rotate(1deg);
      }
    `}

  ${(props) =>
    props.position.left &&
    `
      margin-right: 2em;

      :hover {
        transform: rotate(-1deg);
      }
    `}
`;
