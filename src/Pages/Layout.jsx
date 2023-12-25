import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const location = useLocation()
    return (
        <div>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Главная</Link>
                <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Блог</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Контакты</Link>
                <Link to="/products/" className={location.pathname === '/products/' ? 'active' : ''}>Товары</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;

