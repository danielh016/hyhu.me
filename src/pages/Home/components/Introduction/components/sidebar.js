import React from 'react';
import PropTypes from 'prop-types';
import { SideNavbar } from '../introductionStyles';

const Sidebar = (props) => {
  const { sections } = props;

  return (
    <SideNavbar>
      <ul>
        {sections.map((section) => (
          <li key={section.sectionTitle}>
            <a href={`#${section.type}`}>{section.sectionTitle}</a>
          </li>
        ))}
      </ul>
    </SideNavbar>
  );
};

Sidebar.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default Sidebar;
