import React from 'react';
import { useAuth } from './AuthContextProvider';

const LoginPage = () => {
  const { login } = useAuth();

  return (
    <div>
      <h2>Страница входа</h2>
      <button onClick={login}>Войти</button>
    </div>
  );
};

export default LoginPage;
