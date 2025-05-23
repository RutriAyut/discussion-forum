import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUsers } from '../states/users/action';
import { toast } from 'react-toastify';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    const status = dispatch(asyncRegisterUsers({ name, email, password }));
    if (status === 'success') {
      toast.success('Registrasi Berhasil');
      navigate('/login');
    }
  };

  return (
    <section className='register-page'>
      <header className='regiser-page__header'>
        <h1>Registration</h1>
        <h6>Ready to join the fun? Let&apos;s get you started!</h6>
      </header>
      <article className='register-page__main'>
        <RegisterInput register={onRegister} />
      </article>
    </section>
  );
}

export default RegisterPage;
