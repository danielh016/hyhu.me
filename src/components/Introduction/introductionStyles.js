import styled from 'styled-components';
import { colors } from '../../utils/styleVariables';

export const IntroContainer = styled.div`
  background-color: ${colors.gray900};
  height: 100vh;
`;

export const SideNavbar = styled.div`
  align-items: center;
  border-right: 1px solid ${colors.gold};
  color: ${colors.gold};
  display: flex;
  height: 50vh;
  justify-content: center;
  position: absolute;
  right: 0;
  top: 25vh;
  width: 100%;

  ul {
    list-style-type: none;
    text-align: center;
  }

  li {
    margin-bottom: 1.5vh;
  }

  a {
    color: ${colors.gold};
    text-transform: uppercase;
  }
`;

export const IntroDetailContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85vh;
  justify-content: center;

  h1 {
    color: ${colors.gold};
  }

  h3 {
    color: ${colors.gray300};
  }

  p {
    color: ${colors.gray500};
    margin: 1vh 10vh;
    text-align: justify;
  }
`;

export const IntroDetailImage = styled.img`
  border-radius: 50%;
  height: 21vh;
  margin: 1vh;
  width: 20vh;
`;

export const WebsiteLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 15vh;
  justify-content: center;
`;

export const CircleLinks = styled.a`
  align-items: center;
  background-color: ${colors.gray700};
  border-radius: 50%;
  color: ${colors.gray300};
  display: flex;
  height: 8vh;
  justify-content: center;
  margin: 0 1vh;
  width: 8vh;

  svg {
    height: 4vh;
    width: 4vh;
  }

  :hover {
    background-color: ${colors.gray800};
    color: ${colors.gold};
  }
`;
