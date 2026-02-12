import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const socialIconStyle = {
  width: '1.5em',
  height: '1.5em',
  color: '#696969',
};

const ContactIcons = () => (
  <ul className="icons">
    {data.map((s) => (
      <li key={s.label}>
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <a href={s.link}>
          <FontAwesomeIcon icon={s.icon} style={socialIconStyle} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
