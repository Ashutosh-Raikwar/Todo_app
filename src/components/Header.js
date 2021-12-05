import React from "react";
import logo from "../assets/Images/logo.png";

export const Header = () => {
    return (
        <header className="header">
            <nav>
                <div className="logo">
                    <img src={logo} alt="TodoList" />
                </div>
            </nav>
        </header>
    );
};

export default Header;
