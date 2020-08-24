import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result } = props;
  return (
    <div>
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};
