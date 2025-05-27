import React from 'react';
import { Button, Form } from 'react-bootstrap';
import useInput from '../hooks/useInput';
import PropType from 'prop-types';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const onLoginPress = (event) => {
    if (event.key === 'Enter') {
      login({ email, password });
    }
  };

  return (
    <Form className='login-input' onKeyDown={onLoginPress}>
      <Form.Group className='mb-3'>
        <Form.Label>Email</Form.Label>
        <Form.Control type='email' value={email} onChange={onEmailChange} placeholder='Email' />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' value={password} onChange={onPasswordChange} placeholder='Password' />
      </Form.Group>
      <Button onClick={() => login({ email, password })}>Login</Button>
    </Form>
  );
}

LoginInput.propTypes = {
  login: PropType.func.isRequired,
};

export default LoginInput;
