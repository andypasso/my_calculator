import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './button.css';
import { LogicContext } from './App';

export default function Button(props) {
  const { handleClick } = useContext(LogicContext);

  const { name, color, wide } = props;
  return (
    <button
      type="button"
      className={`btn ${color} ${wide ? 'wide' : null}`}
      onClick={() => handleClick(name)}
    >
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
