import React from 'react'
import "./About.css";
import { CiLocationArrow1 } from "react-icons/ci";

const About = ({ menuIsActive }) => {
    return (
        <section className={`aboutme ${menuIsActive ? 'menu-active' : ''}`}>
            <div className='aboutcontent'>
                <div className='aboutcontent-txt'>
                    <h2>ABOUT ME <div></div> </h2>

                    <p>Hi, I'm Saumya Deliwala. A passionate Front-end React Developer based in
                        Ahmedabad, India.📍I craft user-friendly interfaces that captivate and engage .</p>

                    <p>I currently work with Reactjs in combination with CSS.</p>

                    <button className='more'>MORE <span className='arrow-icon'><CiLocationArrow1 /></span></button>
                </div>
                <img src="images/abt.jpg" alt="" />

            </div>
        </section>
    )
}

export default About
