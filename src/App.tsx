import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import {IconButton} from "@mui/material";
import {CreateReminder, } from "./components/CreateReminder";
import CreateContact from './components/CreateContact';
import ContactBook from "./components/ContactBook";
import CreateGroup from "./components/CreateGroup";


//<CreateReminder studentId={1} />

const App: React.FC = () => {
    const [isCreateContactVisible, setCreateContactVisible] = useState(false);
    const [isContactBookVisible, setContactBookVisible] = useState(false);

    const toggleCreateContact = () => {
        setCreateContactVisible(prev => !prev);
        setContactBookVisible(false);
    };

    const toggleContactBook = () => {
        setContactBookVisible(prev => !prev);
        setCreateContactVisible(false);
    };

    return (
        <div className="app-container">
            <Header />
            <div className="main-menu-box">
                <Menu onCreateClick={toggleCreateContact} onActiveClick={toggleContactBook} /> {/* Передаємо функції */}
                <div className="contact-book-box">
                    {/*<CreateReminder studentId={1} />*/}
                    {/*<CreateGroup/>*/}
                    <CreateContact/>
                    <div className="status-bar"></div>
                    <div className="contact-book"></div>
                    {isCreateContactVisible && <CreateContact />} {/* Відображення форми */}
                    {isContactBookVisible && <ContactBook />} {/* Відображення ContactBook */}
                </div>
            </div>
        </div>
    );
}

export default App;
