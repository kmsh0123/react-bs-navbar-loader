import React, {useEffect, useState} from 'react';
import './App.scss'
import Loader from "./Loader";
import NavBar from "km-react-bs-navbar-loader/src/NavBar";



function App(props) {
    return (
        <div>
            <Loader/>
            <NavBar/>
        </div>
    );
}

export default App;