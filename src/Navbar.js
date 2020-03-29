import React from 'react';
import PropTypes from 'prop-types';
import { StyledNavbar, StyledNav } from './NavbarStyles';

const Navbar = (props) => {
  const { name, sections } = props;
  return (
    <StyledNavbar bg="light" expand="lg">
      <StyledNavbar.Brand href="#home">{name}</StyledNavbar.Brand>
      <StyledNavbar.Collapse className="justify-content-end">
        <StyledNav>
          {sections.map((section) => (
            <StyledNav.Link href={`#${section.type}`}>{section.sectionTitle}</StyledNav.Link>
          ))}
        </StyledNav>
      </StyledNavbar.Collapse>
    </StyledNavbar>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
