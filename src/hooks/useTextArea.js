import { useState } from 'react';

function useTextArea(defaultValue = '') {
  const [value, setValue] = useState(defaultValue);

  function handleValueChange({ target }) {
    setValue(target.innerHTML);
  }

  return [value, handleValueChange, setValue];
}

export default useTextArea;
