import { motion } from 'framer-motion';
import React from 'react';
import './Hero.css';

function Hero() {
    let wid = window.innerWidth;

    const h1Variant = {
        hidden: {
            x: '-100vw'
        },
        visible: {
            x: 0,
            transition: {
                type: 'tween',
                duration: 1,
                when: "beforeChildren",
            }
        }
    };

    const lineVariant = {
        hidden: {
            width: 0,
            height: 0,
            opacity: 0
        },
        visible: {
            width: '100%',
            height: '100%',
            opacity: 1,
        }
    }

    return (
        <div className="hero" style={{ backgroundImage: `url(./images/${wid > 720 ? 'desktop' : 'mobile'}/image-hero.jpg)` }}>
            <motion.h1
                variants={h1Variant}
                initial="hidden"
                animate="visible"
                transition={{}}>
                IMMERSIVE
                <br />
                EXPERIENCES
                <br />
                THAT
                <br style={{ display: wid > 720 ? 'none' : 'block' }} />
                {wid > 720 ? ' ' : ''} DELIVER
                <motion.div className="line"
                    variants={lineVariant}></motion.div>
            </motion.h1>
        </div >
    )
}

export default Hero
