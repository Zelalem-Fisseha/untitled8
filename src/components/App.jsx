import React from 'react';
import Sidebar from "./Sidebar.jsx";
import Header from "./Header.jsx";
import Form from "./Form.jsx";
import '../css/App.css';

function App() {
    return (
        <div className="app" >
            <Sidebar />
            <div className="main-content">
                <Header />
                <Form />
            </div>
        </div>
    );

}


export default App
