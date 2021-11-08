import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Grid.css';

function Grid() {
    let wid = window.innerWidth;
    const controls = useAnimation();
    const [ref, inView] = useInView({ rootMargin: wid > 720 ? '-350px' : '-100px' });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const boxVariant = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 1
        }
    }

    const container = {
        hidden: { x: 0 },
        visible: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    }

    return (
        <div className="g">
            <div className="g-title">
                <h2>OUR CREATIONS</h2>
                <h3 style={{ display: wid > 720 ? 'block' : 'none' }}>SEE ALL</h3>
            </div>
            <motion.div className="grid"
                ref={ref}
                variants={container}
                initial="hidden"
                animate={controls}>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-deep-earth.jpg)`
                    }}>
                    <h3>DEEP <br /> EARTH</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-night-arcade.jpg)`
                    }}>
                    <h3>NIGHT <br /> ARCADE</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-soccer-team.jpg)`
                    }}>
                    <h3>SCOCCER <br /> TEAM VR</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-grid.jpg)`
                    }}>
                    <h3>THE <br /> GRID</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-from-above.jpg)`
                    }}>
                    <h3>FROM UP <br /> ABOVE VR</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-pocket-borealis.jpg)`
                    }}><h3>POCKET <br /> BOREALIS</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-curiosity.jpg)`
                    }}>
                    <h3>THE <br /> CURIOSITY</h3>
                </motion.div>
                <motion.div className="box"
                    variants={boxVariant}
                    style={{
                        backgroundImage: `url(./images/${wid > 720 ? "desktop" : "mobile"
                            }/image-fisheye.jpg)`
                    }}>
                    <h3>MAKE IT <br /> FISHEYE</h3>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Grid;
