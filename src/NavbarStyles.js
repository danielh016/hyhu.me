import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';
import { colors } from './utils/styleVariables';

export const StyledNavbar = styled(Navbar)`
  && {
    background-color: ${colors.gray900} !important;
    box-shadow: 0 3px 2px ${colors.gold};
    padding: 0.75rem 3rem;

    && > a {
      color: ${colors.gold};
      text-transform: uppercase;
    }
  }
`;

export const StyledNav = styled(Nav)`
  && > a {
    color: ${colors.gold} !important;
    padding: 0 1rem !important;
    text-transform: uppercase;
  }
`;
