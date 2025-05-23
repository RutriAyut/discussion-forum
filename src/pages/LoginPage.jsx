import React from 'react';
import LoginInput from '../components/LoginInput';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { asyncPreloadProcess } from '../states/isPreload/action';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = ({ email, password }) => {
    const status = dispatch(asyncSetAuthUser({ email, password }));
    if (status === 'success') {
      toast.success('Login Berhasil');
      dispatch(asyncPreloadProcess());
      navigate('/');
    }
  };

  return (
    <section className='login-page'>
      <header className='login-page__header'>
        <h1>Login</h1>
        <h6>Ready to jump in !</h6>
      </header>
      <article className='login-page__main'>
        <LoginInput login={onLogin} />
        <p className='mt-2'>Don&apos;t have an account? <Link to='/register'>Register</Link></p>
      </article>
    </section>
  );
}

export default LoginPage;
