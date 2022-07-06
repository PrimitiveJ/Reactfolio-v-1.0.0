import React from 'react';


const Header = () => {
    return (
        <div className="header">
            <nav>
                <div className="logo">
                    <h1>Christopher J Hoke/James L Primitive</h1>
                </div>

                <ul className="nav-items">
                    <li>
                       <a href="home">Home</a>
                    </li>
                    <li>
                       <a href="portfolio">Portfolio</a>
                    </li>
                    <li>
                       <a href="aboutme">About Me</a>
                    </li>
                    <li>
                       <a href="contact">Contact</a>
                    </li>
                    <li>
                       <a href="resume">Resume</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header