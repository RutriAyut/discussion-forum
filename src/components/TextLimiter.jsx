import React from 'react';
import PropTypes from 'prop-types';

const TextLimiter = ({ text }) => {
  const maxLength = 20;
  const limitedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

  return <p>{limitedText}</p>;
};

TextLimiter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TextLimiter;
