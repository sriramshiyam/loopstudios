import React, { useState } from 'react';
import './Header.css';
import { motion } from 'framer-motion';


function Header() {
    let wid = window.innerWidth;
    const [pos, setPos] = useState(wid > 720 ? 0 : '-100vw');
    const menuVariant = {
        hidden: {
            x: wid > 720 ? 0 : '-100vw'
        },
        visible: {
            x: pos,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const navVariant = {
        hidden: {
            y: '-100vh'
        },
        visible: {
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 80,
                duration: 1.5
            }
        }
    };

    return (
        <div>
            <motion.nav
                variants={navVariant}
                initial="hidden"
                animate="visible"
            >
                <h2>loopstudios</h2>
                <motion.ul
                    variants={menuVariant}
                    initial="hidden"
                    animate="visible">
                    <li className="menu-title"><h2>loopstudios</h2><svg onClick={() => setPos('-100vw')} fill="currentColor" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.854 12.854c-0-0-0-0-0-0l-4.854-4.854 4.854-4.854c0-0 0-0 0-0 0.052-0.052 0.090-0.113 0.114-0.178 0.066-0.178 0.028-0.386-0.114-0.529l-2.293-2.293c-0.143-0.143-0.351-0.181-0.529-0.114-0.065 0.024-0.126 0.062-0.178 0.114 0 0-0 0-0 0l-4.854 4.854-4.854-4.854c-0-0-0-0-0-0-0.052-0.052-0.113-0.090-0.178-0.114-0.178-0.066-0.386-0.029-0.529 0.114l-2.293 2.293c-0.143 0.143-0.181 0.351-0.114 0.529 0.024 0.065 0.062 0.126 0.114 0.178 0 0 0 0 0 0l4.854 4.854-4.854 4.854c-0 0-0 0-0 0-0.052 0.052-0.090 0.113-0.114 0.178-0.066 0.178-0.029 0.386 0.114 0.529l2.293 2.293c0.143 0.143 0.351 0.181 0.529 0.114 0.065-0.024 0.126-0.062 0.178-0.114 0-0 0-0 0-0l4.854-4.854 4.854 4.854c0 0 0 0 0 0 0.052 0.052 0.113 0.090 0.178 0.114 0.178 0.066 0.386 0.029 0.529-0.114l2.293-2.293c0.143-0.143 0.181-0.351 0.114-0.529-0.024-0.065-0.062-0.126-0.114-0.178z"></path></svg></li>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Events</li>
                    <li>Products</li>
                    <li>Support</li>
                </motion.ul>
                <svg onClick={() => setPos('0')} viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                    </path>
                </svg>
            </motion.nav>
        </div >
    );
}

export default Header;
