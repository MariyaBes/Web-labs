//СПОСОБ 0
import React from 'react';
import { Link, Outlet, NavLink, useLocation, withRouter } from 'react-router-dom';
import './Layout.css';

const Layout = () => {
    const location = useLocation()
    return (
        <div>
            <nav>
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                <Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link>
                <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//СПОСОБ 1 
//Замена Link на NavLink с классом 'active' в CSS
// import React from 'react';
// import { Outlet, NavLink } from 'react-router-dom';
// import './Layout.css';

// const Layout = () => {
//     return (
//         <div>
//             <nav>
//                 <NavLink to="/" activeClassName="active">Home</NavLink>
//                 <NavLink to="/blogs" activeClassName="active">Blogs</NavLink>
//                 <NavLink to="/contact" activeClassName="active">Contact</NavLink>
//             </nav>
//             <Outlet />
//         </div>
//     );
// };

// export default Layout;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Способ 2: Использование className у NavLink
//у NavLink проп (prop) className, который может принимать помимо строки и функцию 
// import React from 'react';
// import { Outlet, NavLink } from 'react-router-dom';
// import './Layout.css';

// const Layout = () => {
//     const setActive = ({ isActive }) => isActive ? 'active-link' : '';

//     return (
//         <div>
//             <nav>
//                 <NavLink to="/" className={setActive}>Home</NavLink>
//                 <NavLink to="/blogs" className={setActive}>Blogs</NavLink>
//                 <NavLink to="/contact" className={setActive}>Contact</NavLink>
//             </nav>
//             <Outlet />
//         </div>
//     );
// };

// export default Layout;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Способ 3: Использование style у NavLink
//проп style, который может принимать помимо объекта еще ифункцию, которая будет возвращать объект.
// import React from 'react';
// import { Link, Outlet, NavLink } from 'react-router-dom';
// import './Layout.css';

// const Layout = () => {
//     return (
//         <div>
//             <nav>
//                 <NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' })}>Home</NavLink>
//                 <NavLink to="/blogs" style={({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' })}>Blogs</NavLink>
//                 <NavLink to="/contact" style={({ isActive }) => ({ color: isActive ? 'var(--color-active)' : 'white' })}>Contact</NavLink>
//             </nav>
//             <Outlet />
//         </div>
//     );
// };

// export default Layout;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Способ 4: Создание кастомного Link:
// Layout.jsx
// import React from 'react';
// import { Outlet } from 'react-router-dom';
// import CustomLink from './CustomLink';
// import './Layout.css';

// const Layout = () => {
//     return (
//         <div>
//             <nav>
//                 <CustomLink to="/">Home</CustomLink>
//                 <CustomLink to="/blogs">Blogs</CustomLink>
//                 <CustomLink to="/contact">Contact</CustomLink>
//             </nav>
//             <Outlet />
//         </div>
//     );
// };

// export default Layout;
