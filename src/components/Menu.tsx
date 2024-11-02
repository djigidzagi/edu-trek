import React from "react";
import Create from "./Create";
import Active from "./Active";
import Contacts from "./Contacts";
import Groups from "./Groups";
import Students from "./Students";
import Lecturers from "./Lecturers";

interface MenuProps {
    onCreateClick: () => void;
    onActiveClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onCreateClick, onActiveClick }) => {
    return (
        <aside className="sidemenu">
            <Create onCreateClick={onCreateClick} />
            <nav className="menu">
                <ul>
                    <li><Active onClick={onActiveClick} /></li>
                    <li><Contacts /></li>
                    <li><Groups /></li>
                    <li><Students /></li>
                    <li><Lecturers /></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Menu;