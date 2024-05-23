import React from 'react'
import "./Project.css"
import { IoOpenOutline } from "react-icons/io5";
import { FiGithub } from "react-icons/fi";


const Project = ({ menuIsActive }) => {
    return (
        <section className={`project ${menuIsActive ? 'menu-active' : ''}`}>
            <div className="project-title">
                <h2>Some Project That I've Built <div></div> </h2>

                <div className='project-content'>

                    <div className="project-content-1">

                        <div className='content-1'>

                            <h1>Cryptocurrency Price Tracker</h1>
                            <p>Stay updated with real-time cryptocurrency prices through my intuitive tracker,
                                providing instant insights into market fluctuations, trends, all in one
                                convenient platform.
                            </p>
                            <p2>Reactjs CSS API
                                <p3>
                                    <a href="https://cryptic-tracker.vercel.app/"><IoOpenOutline /></a>
                                    <a href="https://github.com/saumyadeliwala/Crypto-Tracker"><FiGithub /></a>
                                </p3>
                            </p2>

                        </div>

                        <img src="/crypto.png" alt="" />
                    </div>

                    <br /><br /><br /><br /><br /><br /><hr /><br /><br /><br /><br /><br /><br />

                    <div className="project-content-2">

                        <div className='content-2'>

                            <h1>Excel Data Viewer & Upload </h1>
                            <p>Effortlessly manage Excel files with a versatile tool. Seamlessly view and upload data, 
                                simplifying tasks with a user-friendly interface. Enhance efficiency and streamline 
                                workflows for individuals and businesses.
                            </p>
                            <p2>Reactjs CSS ROUTER
                                <p3>
                                    <a href="https://open-in-app-task-v2-by-saumyadeliwala.vercel.app/upload"><IoOpenOutline /></a>
                                    <a href="https://github.com/saumyadeliwala/Excel-File-Reader-App-v2"><FiGithub /></a>
                                </p3>
                            </p2>

                        </div>

                        <img src="/file.png" alt=""/>
                    </div>

                    <br /><br /><br /><br /><br /><br /><hr /><br /><br /><br /><br /><br /><br />

                    <div className="project-content-3">

                        <div className='content-3'>

                            <h1>Shoes Selling E-commerce  </h1>
                            <p>Enhance your shoe shopping experience with our e-commerce platform. Effortlessly 
                                browse and purchase from a wide range of stylish footwear. 
                                User-friendly and efficient, our site streamlines your buying process, 
                                catering to both individual tastes and business needs.
                            </p>
                            <p2>HTML5 CSS3
                                <p3>
                                    <a href=""><IoOpenOutline /></a>
                                    <a href=""><FiGithub /></a>
                                </p3>
                            </p2>

                        </div>

                        <img src="/luxe.png" alt=""/>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Project
