import React, {StrictMode} from "react";
import Create from "./Create";
import Active from "./Active";
import Contacts from "./Contacts";
import Groups from "./Groups";
import Students from "./Students";
import Lecturers from "./Lecturers";

const Menu: React.FC = () => {
    return (
        <aside className="sidemenu">
            <Create />
            <nav className="menu">
                <ul>
                    <li><Active /></li>
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