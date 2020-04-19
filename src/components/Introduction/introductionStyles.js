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
    text-decoration: none;
    text-transform: uppercase;

    :hover {
      color: ${colors.gray300};
      transition: 0.4s;
    }
  }
`;

export const IntroDetailContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 87.5vh;
  justify-content: center;

  h1 {
    color: ${colors.gold};

    :hover {
      color: ${colors.gray300};
      transition: 0.5s;
    }
  }

  h3 {
    color: ${colors.gray300};

    :hover {
      color: ${colors.gray100};
      transition: 0.5s;
    }
  }

  p {
    color: ${colors.gray500};
    margin: 1vh 10vh;
    text-align: justify;

    :hover {
      color: ${colors.gray300};
      transition: 0.5s;
    }
  }
`;

export const IntroDetailImage = styled.img`
  border-radius: 50%;
  height: 21vh;
  margin: 1vh;
  width: 20vh;

  :hover {
    height: 22vh;
    width: 21vh;
    transition: 0.5s;
  }
`;

export const WebsiteLinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 12.5vh;
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
    transition: 0.5s;
  }
`;
