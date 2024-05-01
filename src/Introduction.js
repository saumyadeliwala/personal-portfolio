import React from 'react';
import "./Introduction.css";
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Introduction = ({ menuIsActive }) => {
    return (
        <>
            <section className={`intro ${menuIsActive ? 'menu-active' : ''}`}>

                <div className="profile-pic">
                    <img src="/images/me.jpg" alt="" className='image1' />
                </div>

                <div className="intro-txt">
                    <h1>Front-End Developer</h1>
                    <p>Hi, I'm Saumya Deliwala. A passionate Front-end React Developer based in Ahmedabad, India. 📍</p>
                    <ul className='icons-links'>
                        <li><a href="https://github.com/saumyadeliwala"><FaGithub /></a></li>
                        <li><a href="https://www.linkedin.com/in/saumya-deliwala/"><FaLinkedin /></a></li>
                    </ul>

                    <div className='tech-stacks'>
                        <p>tech stacks</p>
                        <ul>
                            <li><a href=""><img src="/html.svg" alt="" /></a></li>
                            <li><a href=""><img src="/css.svg" alt="" /></a></li>

                            <li><a href=""><img src="/js.svg" alt="" /></a></li>
                            <li><a href=""><img src="/react.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Introduction;
