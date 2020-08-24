import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button(props) {
  const { name, color, wide } = props;
  return (
    <button type="button" className={`btn ${color} ${wide ? 'wide' : null}`}>
      { name }
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool.isRequired,
};

Button.defaultProps = {
  color: 'orange',
};
