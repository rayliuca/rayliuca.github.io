import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Websites Navbar, displays routes defined in 'src/data/routes'
const footerStyle = {
  float: 'none',
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

const footerIconStyle = {
  width: '2em',
  height: '2em',
};

const Footer = () => (
  <div style={footerStyle}>
    <h2>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <a href="https://github.com/rayliuca/rayliuca.github.io">
        <FontAwesomeIcon icon={faGithub} style={footerIconStyle} />
      </a>
    </h2>
  </div>
);

export default Footer;
