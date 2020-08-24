import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
  return (
    <div>
      { name }
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
};
