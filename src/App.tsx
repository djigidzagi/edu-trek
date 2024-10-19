import React from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";



function App() {
  return (
    <div className="app-container">
        <Header/>
        <div className="main-menu-box">
            <Menu/>
            <div className="contact-book-box">
                <div className="status-bar"></div>
                <div className="contact-book"></div>
            </div>
        </div>
    </div>
  );
}

export default App;
