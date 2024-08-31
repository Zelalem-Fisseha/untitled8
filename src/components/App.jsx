import React from 'react';
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import '../css/App.css';
import Dashboard from "../pages/Dashboard.jsx";

function App() {
    return (
        <div className={'dashboard'}>
            <Dashboard/>
        </div>


    );

}


export default App
