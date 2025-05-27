import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropType from 'prop-types';
import useTextArea from '../hooks/useTextArea';

function CommentInput({ addComment, id }) {
  const [content, onContentChange] = useTextArea('');
  return (
    <div className='thread-comment__input'>
      <h5>Beri Komentar</h5>
      <Form className='comment-input'>
        <div
          className='form-control add-new-page__input__body border'
          data-placeholder='Tinggalkan Komentar di sini'
          value={content}
          onInput={onContentChange}
          contentEditable
          title='comment-content'>
        </div>
        <Button onClick={() => addComment({ id, content })}>Kirim</Button>
      </Form>
    </div>
  );
}

CommentInput.propTypes = {
  id: PropType.string.isRequired,
  addComment: PropType.func.isRequired,
};

export default CommentInput;
