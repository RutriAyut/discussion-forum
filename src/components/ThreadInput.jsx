import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import PropType from 'prop-types';
import useTextArea from '../hooks/useTextArea';

function ThreadInput({ addThread }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useTextArea('');

  return (
    <Form className='login-input'>
      <Form.Group className='mb-3'>
        <Form.Control type='text' value={title} onChange={onTitleChange} placeholder='Judul'/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Control type='text' value={category} onChange={onCategoryChange} placeholder='Kategori' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <div
          className='form-control add-new-page__input__body border'
          value={body}
          onInput={onBodyChange}
          contentEditable
          title='body-thread'>
        </div>
      </Form.Group>
      <Button onClick={() => addThread({ title, category, body })}>Mulai Diskusi</Button>
    </Form>
  );
}

ThreadInput.propTypes = {
  addThread: PropType.func.isRequired,
};

export default ThreadInput;
