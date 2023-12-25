import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";
import NoPage from "./Pages/NoPage";
import Products from "./Pages/Products";

function Phone() { return <h3>Смартфоны</h3>; }
function Tablet() { return <h3>Планшеты</h3>; }

function App() {
   
    return (
        <div className="App">
            <div className='app-header-title'>
                <h1 className="app-header-title__head">Программирование и поддержка веб-приложений</h1>
                <h2 className="app-header-title__desc"><strong>React Router Hooks. React Context API.</strong></h2>
            </div>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/products/*" element={<Products />}>
                            <Route path="phones" element={<Phone />} />
                            <Route path="tablets" element={<Tablet />} />
                        </Route>
                        <Route path="blogs" element={<Blogs />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="error" element={<ErrorPage />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </Router>
          
        </div>
    );
}

export default App;

