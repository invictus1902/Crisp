import React from 'react';
import {Route,Routes} from 'react-router-dom'
import './App.scss'
import Layout from "./Layout/Layout";
import Home from "./pages/home/home";
import Shop from "./pages/shop/shop";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={''} element={<Home/>}/>
                    <Route path={'/shop'} element={<Shop/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;