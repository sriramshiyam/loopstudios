import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import "./Content.css";


function Content() {
    let wid = window.innerWidth;
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const [ref, inView] = useInView({ rootMargin: '-100px' });

    useEffect(() => {
        if (inView) {
            controls1.start("visible");
            controls2.start("visible");
        }

    }, [controls1, controls2, inView]);

    let photoVariant = {
        hidden: {
            opacity: 0,
            y: 200
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                type: 'tween'
            }
        }
    }

    let infoVariant = {
        hidden: {
            x: '100vw'
        },
        visible: {
            x: 0,
            transition: {
                duration: 1,
                delay: 0.3
            }
        }
    }

    return (
        <div className="content">
            <motion.img
                ref={ref}
                variants={photoVariant}
                initial="hidden"
                animate={controls1}
                src={`./images/${wid > 720 ? "desktop" : "mobile"
                    }/image-interactive.jpg`}
            />
            <motion.div className="info"
                variants={infoVariant}
                initial="hidden"
                animate={controls2}>
                <h2>
                    THE LEADER IN <br /> INTERACTIVE VR
                </h2>
                <p>
                    Founded in 2011, Loopstudios has been producing world-class virtual
                    reality projects for some of the best companies around the globe.Our
                    award-winning creations have transformed businesses through digital
                    experiences that bind to their brand.
                </p>
            </motion.div>
        </div>
    );
}

export default Content;
