import logo from "../utils/logo.svg";
import logout_logo from "../utils/toppng.com-login-logout-white-icon-512x512.png"
import React from "react";

const Header = () => {

    return (
        <header className="App-header">
            <img className={"img-header"}
                 src={logo}
                 alt={"EduTrek logo"}/>
            <div className="search-bar">
                <span className="search-icon">🔍</span>
                <input type="text" placeholder="Search" className={"search"}/>
            </div>
            <div className="sing-out">
                <img className={"img-logout"}
                     src={logout_logo}
                     alt={"Sign out logo"}/>
                <button className={"button-sing-out"}>Sing out</button>
            </div>
        </header>
    );
};

export default Header;