import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="f1">
                <h2>loopstudios</h2>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className="f2">
                <img alt="" src="./images/icon-facebook.svg"/>
                <img alt="" src="./images/icon-twitter.svg"/>
                <img alt="" src="./images/icon-pinterest.svg"/>
                <img alt="" src="./images/icon-instagram.svg"/>
                <br/>
                <small>© 2021 Loopstudios. All rights reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
