import React, { useState, useEffect } from 'react';
import { Fade } from 'react-bootstrap';
import { StyledNavbar, StyledNav } from './navbarStyles';
import websiteContent from '../../websiteContent.json';

const Navbar = () => {
  const { name } = websiteContent.data.introduction;
  const websiteContentValues = Object.values(websiteContent.data);
  const sections = websiteContentValues.filter((value) =>
    Object.keys(value).includes('sectionTitle')
  );
  const [fadeVisibility, setFadeVisibility] = useState(false);
  const [startFading, setStartFading] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const startFadingCondition = scrollPosition > window.innerHeight - 100;
    const fadeVisibilityCondition = scrollPosition > 300;

    setFadeVisibility(fadeVisibilityCondition);
    setStartFading(startFadingCondition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return function cleanup() {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  if (fadeVisibility) {
    return (
      <Fade in={startFading}>
        <StyledNavbar bg="light" expand="lg" sticky="top">
          <StyledNavbar.Brand href="#home">{name}</StyledNavbar.Brand>
          <StyledNavbar.Collapse className="justify-content-end">
            <StyledNav>
              {sections.map((section) => (
                <StyledNav.Link key={section.sectionTitle} href={`#${section.type}`}>
                  {section.sectionTitle}
                </StyledNav.Link>
              ))}
            </StyledNav>
          </StyledNavbar.Collapse>
        </StyledNavbar>
      </Fade>
    );
  }
  return null;
};

export default Navbar;
