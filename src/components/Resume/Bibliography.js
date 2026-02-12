import React from 'react';
import PropTypes from 'prop-types';

import Paper from './Bibliography/Paper';

const Bibliography = ({ data }) => (
  <div className="bibliography">
    <div className="link-to" id="bibliography" />
    <div className="title">
      <h3>Bibliography</h3>
    </div>
    {data.map((job) => (
      <Paper
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

Bibliography.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    company: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Bibliography.defaultProps = {
  data: [],
};

export default Bibliography;
