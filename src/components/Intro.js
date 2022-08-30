import React, { useContext } from 'react';
import classes from './Intro.module.css'
import DarkMode from '../store/darkmode-context';

const Intro = () => {
    const ctx = useContext(DarkMode)

    return <>
        <div className={`${ctx.introLight}`}>

            <h2 className={`${classes.title}`}>Why Should You Choose Us?</h2>
            <div className={`${classes.whybox}`}>
                <div className={`${classes.whyboxinner}`}>
                    <h3 className={`${classes.whytitle}`}>Lorem ipsum dolor sit amet</h3>
                    <p>Ut accumsan consectetur orci. Phasellus vehicula bibendum dolor sed pulvinar. Nulla facilisi.</p></div>
                <div className={`${classes.whyboxinner}`}>
                    <h3 className={`${classes.whytitle}`}>Lorem ipsum dolor sit amet</h3>
                    <p>Ut accumsan consectetur orci. Phasellus vehicula bibendum dolor sed pulvinar. Nulla facilisi.</p></div>

                <div className={`${classes.whyboxinner}`}>
                    <h3 className={`${classes.whytitle}`}>Lorem ipsum dolor sit amet</h3>
                    <p>Ut accumsan consectetur orci. Phasellus vehicula bibendum dolor sed pulvinar. Nulla facilisi.</p></div>

                <div className={`${classes.whyboxinner}`}>
                    <h3 className={`${classes.whytitle}`}>Lorem ipsum dolor sit amet</h3>
                    <p>Ut accumsan consectetur orci. Phasellus vehicula bibendum dolor sed pulvinar. Nulla facilisi.</p></div>


            </div >
        </div >
    </>

}
export default Intro;