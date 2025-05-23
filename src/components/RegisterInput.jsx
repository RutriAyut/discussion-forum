import React from 'react';
import PropType from 'prop-types';
import useInput from '../hooks/useInput';
import { Button, Form } from 'react-bootstrap';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onRegisterPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      register({ name, email, password });
    }
  };

  return (
    <Form className='register-input' onKeyDown={onRegisterPress}>
      <Form.Group className='mb-3'>
        <Form.Label>Name</Form.Label>
        <Form.Control type='text' value={name} onChange={onNameChange}/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' value={email} onChange={onEmailChange}/>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' value={password} onChange={onPasswordChange} />
      </Form.Group>
      <Button onClick={() => register({ name, email, password })}>Register</Button>
    </Form>
  );
}

RegisterInput.propTypes = {
  register: PropType.func.isRequired,
};

export default RegisterInput;
