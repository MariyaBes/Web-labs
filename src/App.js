import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import User from './components/User';
import UserDetail from './components/UserDetail';
import ComponentA from './context/ComponentA';
import ComponentB from './context/ComponentB';
import { Context } from './context/Context';
import {AuthProvider, useAuth} from "./components/AuthContextProvider";
import NavigationBar from "./components/NavigationBar";
import PrivateRoute from "./components/PrivateRoute";
import PrivatePage from "./components/PrivatePage";
import LoginPage from "./components/LoginPage";


function App() {
    const [context, setContext] = useState({ value: 'default context value' });
    const { isAuthenticated } = useAuth();

    return (
        <div className="App">
            <div className="app-header-title">
                <h1 className="app-header-title__head">Программирование и поддержка веб-приложений</h1>
                <h2 className="app-header-title__desc">
                    <strong>React Router Hooks. React Context API.</strong>
                </h2>
            </div>

            <Router>
                <Routes>
                    <Route index element={<User />} />
                    <Route path="/:id" element={<UserDetail />} />
                </Routes>
            </Router>

            <div className="margin">
                <Context.Provider value={[context, setContext]}>
                    <ComponentA />
                    <ComponentB />
                </Context.Provider>
            </div>

            <Router>
                <AuthProvider>
                    <NavigationBar />
                    <Routes>
                        <Route path="/private" element={<PrivateRoute element={<PrivatePage />} />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
