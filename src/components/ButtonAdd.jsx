import React from 'react';
import PropTypes from 'prop-types';

const ButtonAdd = ({ onAddThread, primary = true }) => {
  const mode = primary ? 'bi-plus-circle-fill' : 'bi-plus-circle';
  return (
    <button className='new-thread-button' onClick={() => onAddThread()}>
      <i className={[`bi ${mode}`]}></i>
    </button>
  );
};

export default ButtonAdd;

ButtonAdd.propTypes = {
  // Fungsi yang akan mengarahkan ke halaman ThreadAdd
  onAddThread: PropTypes.func.isRequired,
  // mode button, outline atau fill
  primary: PropTypes.bool.isRequired,
};
