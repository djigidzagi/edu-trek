import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import {IconButton} from "@mui/material";
import {CreateReminder, } from "./components/CreateReminder";
import CreateContact from './components/CreateContact';
import ContactBook from "./components/ContactBook";


//<CreateReminder studentId={1} />

const App: React.FC = () => {
    const [isCreateContactVisible, setCreateContactVisible] = useState(false); // Стан для контролю видимості CreateContact
    const [isContactBookVisible, setContactBookVisible] = useState(false); // Стан для контролю видимості ContactBook

    const toggleCreateContact = () => {
        setCreateContactVisible(prev => !prev); // Зміна видимості CreateContact
        setContactBookVisible(false); // Сховати ContactBook при відкритті CreateContact
    };

    const toggleContactBook = () => {
        setContactBookVisible(prev => !prev); // Зміна видимості ContactBook
        setCreateContactVisible(false); // Сховати CreateContact при відкритті ContactBook
    };

    return (
        <div className="app-container">
            <Header />
            <div className="main-menu-box">
                <Menu onCreateClick={toggleCreateContact} onActiveClick={toggleContactBook} /> {/* Передаємо функції */}
                <div className="contact-book-box">
                    {/*<CreateReminder studentId={1} />*/}
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
