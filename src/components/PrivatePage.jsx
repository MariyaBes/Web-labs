import React from 'react';
import { useAuth } from './AuthContextProvider';

const PrivatePage = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h2>Защищенная страница</h2>
      <button onClick={logout}>Выйти</button>
    </div>
  );
};

export default PrivatePage;
