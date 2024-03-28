import React from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.scss'
import Layout from "./Layout/Layout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import Dashboard from "./pages/account_information/dashboard/dashboard";
import Single from "./pages/single/single";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={''} element={<Home/>}/>
                    <Route path={'/shop'} element={<Shop/>}/>
                    <Route path={'single/:id'} element={<Single/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/dashboard'} element={<Dashboard/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;