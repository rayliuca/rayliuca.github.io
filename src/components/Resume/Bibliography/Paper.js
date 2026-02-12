import React from 'react';
import PropTypes from 'prop-types';

const Paper = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4>{data.company}</h4>
    </header>
    <ul className="points">
      {/* {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))} */}

      {data.pubs.map((pub) => (
        <li key={pub.name}>
          <a href={pub.link}>
            {pub.name}
          </a>
        </li>
      ))}
    </ul>
  </article>
);

Paper.propTypes = {
  data: PropTypes.shape({
    company: PropTypes.string.isRequired,
    // points: PropTypes.arrayOf(PropTypes.string).isRequired,
    pubs: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
      }).isRequired,
    ).isRequired,

  }).isRequired,
};

export default Paper;
