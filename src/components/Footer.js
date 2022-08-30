import React from 'react';
import classes from './Footer.module.css'
import { useContext } from 'react';
import DarkMode from '../store/darkmode-context';

const Footer = () => {

    const ctx = useContext(DarkMode)

    return <>
        <footer className={ctx.footerLight}>

            <div className={`${classes.footersection}`}><h4>About</h4><p>Ut accumsan consectetur orci. Phasellus vehicula bibendum dolor sed pulvinar. Nulla facilisi.</p></div>
            <div className={`${classes.footersection}`}><h4>Contact</h4>
                <p>Email: Lorem@ipsum.dolor<br />
                    Phone: +0-123-456-789
                </p>
            </div>
            <div className={`${classes.footersection}`}><h4>Social</h4>
                <div className={classes.socialmedia}>
                    <i className="bi bi-facebook" />
                    <i className="bi bi-twitter" />
                    <i className="bi bi-youtube" />
                    <i className="bi bi-twitch" />
                    <a href='http://github.com/exshid/'> <i className="bi bi-github" /></a>
                </div>
            </div>

        </footer>
    </>

}
export default Footer;