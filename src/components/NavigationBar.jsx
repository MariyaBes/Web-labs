import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/private">Защищенная страница</Link>
        </li>
        <li>
          <Link to="/login">Страница входа</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
