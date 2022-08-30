import { NavLink } from 'react-router-dom'
import React, { useContext } from 'react';
import classes from './Header.module.css'
import Cart from './Cart';
import DarkMode from '../store/darkmode-context';

const Header = () => {
    const ctx = useContext(DarkMode)
    return <header className='sticky-top'><nav className={`${ctx.navLight} navbar ${ctx.headerLight}`}>
        <div className="container-fluid">
            <div>
                <NavLink className={`navbar-brand ${classes.navbar}`} to='/home' activeClassName={classes.active}>Pizziano</NavLink>
                <NavLink className={`navbar-brand ${classes.navbar}`} to='/about-us' activeClassName={classes.active}>About Us</NavLink>
            </div>
            <div>
                <button className={`navbar-toggler bg-primary ${classes.lightmode}`} onClick={ctx.darkmodeHandler} type="button" style={{ '--bs-navbar-toggler-icon-bg': 'none' }} aria-controls="lightmode">
                    <span className="navbar-toggler-icon" ><i className={`bi ${ctx.darkmode}`}></i>
                    </span>
                </button>

                <button className="navbar-toggler bg-primary" type="button" style={{ '--bs-navbar-toggler-icon-bg': 'none' }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">

                    <span className="navbar-toggler-icon"><i className="bi bi-basket"></i>
                    </span>
                </button>
            </div>
            <div className={`offcanvas ${ctx.headerLight} offcanvas-end`} tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Your Cart</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <Cart />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    </header >
}
export default Header;