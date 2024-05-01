import React, { useState } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Header = ({ toggleMenu }) => {

    const [activeMenulinks, setActiveMenulinks] = useState("menu-links");

    const [activeMenuList, setActiveMenuList] = useState("menu-list");

    const navToggle = () => {

        toggleMenu(); 

        // Toggle activeMenulinks
        if (activeMenulinks === "menu-links") {
            setActiveMenulinks("menu-links nav__active");
        } else {
            setActiveMenulinks("menu-links");
        }

        // Toggle activeMenuList
        if (activeMenuList === "menu-list") {
            setActiveMenuList("menu-list  list__active");
        } else {
            setActiveMenuList("menu-list");
        }
    };

    return (
        <>
            <section className="navbar">
                
                <div className="logo">
                    <h2>
                        <span>S</span>aumya <span>D</span>eliwala
                    </h2>
                    <h3>SD</h3>
                </div>

                <div className={activeMenulinks}>
                    <div className={activeMenuList}>
                        <ul>
                            <li><a href="#" className="menu-item">Home</a></li>

                            <li><a href="#" className="menu-item">Projects</a></li>

                            <li><a href="#" className="menu-item">About</a></li>

                            <li><a href="#" className="menu-item">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="socials">

                    <div className="hamburger-menu" onClick={navToggle}>
                        <a href="#">
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>

            </section>

        </>
    );
};

export default Header;

