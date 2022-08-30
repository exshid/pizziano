import React, { useState, useEffect } from 'react';
import DarkMode from "./darkmode-context";
import classes from '../components/Header.module.css'
import introClasses from '../components/Intro.module.css'
import productsClasses from '../components/Products.module.css'
import footerClasses from '../components/Footer.module.css'
import knowClasses from '../components/DidYouKnow.module.css'
import reviewsClasses from '../components/UI/Reviews.module.css'
import inputClasses from '../components/UI/Input.module.css'
import productClasses from '../components/UI/Product.module.css'
import aboutClasses from '../pages/AboutUs.module.css';
import notClasses from '../pages/NotFound.module.css';
import navClasses from '../components/Header.module.css';

const DarkModeProvider = (props) => {
    const [darkmode, setDarkmode] = useState('bi-lightbulb')
    const [aboutUs, setAboutUs] = useState(`${aboutClasses.container}`)
    const [introLight, setIntroLight] = useState(`${introClasses.intro}`)
    const [didYouKnowLight, setDidYouKnowLight] = useState(`${knowClasses.didyouknow}`)
    const [reviewLight, setReviewLight] = useState(`${reviewsClasses.review}`)
    const [footerLight, setFooterLight] = useState(`${footerClasses.footer}`)
    const [productsLight, setProductsLight] = useState(`${productsClasses.products}`)
    const [productLight, setProductLight] = useState(`${productClasses.addtocart}`)
    const [priceLight, setPriceLight] = useState(`${productClasses.price}`)
    const [inputLight, setInputLight] = useState(`${inputClasses.input}`)
    const [headerLight, setHeaderLight] = useState(`bg-dark`)
    const [formLight, setFormLight] = useState(`#111216`)
    const [formTextLight, setFormTextLight] = useState(`form-control`)
    const [navLight, setNavLight] = useState(`${navClasses.nav}`)
    const [notfound, setNotfound] = useState(`${notClasses.notfound__container}`)


    const [formSelectLight, setFormSelectLight] = useState(`form-select`)


    const [darkContainer, setDarkContainer] = useState(`${classes.pizzacontainer}`)
    useEffect(() => {
        const darkmodeIsOn = localStorage.getItem('darkmodeIsOn')
        if (darkmodeIsOn === 'on') {
            setDarkmode('bi-lightbulb-fill')
            setNotfound(`${notClasses.notfound__container} ${notClasses.notfound__light}`)
            setDarkContainer(`${classes.pizzacontainer} ${classes.pizzacontainerlight}`)
            setIntroLight(`${introClasses.intro} ${introClasses.intro__light}`)
            setDidYouKnowLight(`${knowClasses.didyouknow} ${knowClasses.didyouknow__light}`)
            setReviewLight(`${reviewsClasses.review} ${reviewsClasses.review__light}`)
            setFooterLight(`${footerClasses.footer} ${footerClasses.footer__light}`)
            setProductsLight(`${productsClasses.products} ${productsClasses.products__light}`)
            setFormSelectLight(`form-select__light`)
            setFormLight('white')
            setFormTextLight('form-control form-control__light')
            setHeaderLight(`bg-light`)
            setProductLight(`${productClasses.addtocart} ${productClasses.addtocart__light}`)
            setPriceLight(`${productClasses.price} ${productClasses.price__light}`)
            setInputLight(`${inputClasses.input} ${inputClasses.input__light}`)
            setAboutUs(`${aboutClasses.container} ${aboutClasses.container__light}`)
            setNavLight(`${navClasses.nav} ${navClasses.nav__light}`)

        }

    }, [setDarkContainer, setDarkmode])


    function darkmodeHandler() {
        if (darkmode === 'bi-lightbulb') {
            setDarkmode('bi-lightbulb-fill')
            setDarkContainer(`${classes.pizzacontainer} ${classes.pizzacontainerlight}`)
            setIntroLight(`${introClasses.intro} ${introClasses.intro__light}`)
            setDidYouKnowLight(`${knowClasses.didyouknow} ${knowClasses.didyouknow__light}`)
            setReviewLight(`${reviewsClasses.review} ${reviewsClasses.review__light}`)
            setFooterLight(`${footerClasses.footer} ${footerClasses.footer__light}`)
            setProductsLight(`${productsClasses.products} ${productsClasses.products__light}`)
            setNotfound(`${notClasses.notfound__container} ${notClasses.notfound__light}`)

            setProductLight(`${productClasses.addtocart} ${productClasses.addtocart__light}`)
            setPriceLight(`${productClasses.price} ${productClasses.price__light}`)
            setInputLight(`${inputClasses.input} ${inputClasses.input__light}`)
            setAboutUs(`${aboutClasses.container} ${aboutClasses.container__light}`)
            setNavLight(`${navClasses.nav} ${navClasses.nav__light}`)

            setFormSelectLight(`form-select__light`)
            setFormLight('white')
            setFormTextLight('form-control form-control__light')

            setHeaderLight(`bg-light`)

            localStorage.setItem('darkmodeIsOn', 'on')
        }

        else {
            setDarkmode('bi-lightbulb')
            setDarkContainer(`${classes.pizzacontainer}`)
            setIntroLight(`${introClasses.intro}`)
            setDidYouKnowLight(`${knowClasses.didyouknow}`)
            setReviewLight(`${reviewsClasses.review}`)
            setFooterLight(`${footerClasses.footer}`)
            setProductsLight(`${productsClasses.products}`)
            setAboutUs(`${aboutClasses.container}`)
            setNotfound(`${notClasses.notfound__container}`)

            setHeaderLight(`bg-dark`)
            setFormSelectLight(`form-select`)
            setFormLight('#111216')
            setFormTextLight('form-control')

            setProductLight(`${productClasses.addtocart}`)
            setPriceLight(`${productClasses.price}`)
            setInputLight(`${inputClasses.input}`)
            setNavLight(`${navClasses.nav}`)


            localStorage.removeItem('darkmodeIsOn')

        }
    }

    const darkContext = {
        darkmode: darkmode,
        container: darkContainer,
        setContainer: setDarkContainer,
        setMode: setDarkmode,
        darkmodeHandler: darkmodeHandler,
        introLight: introLight,
        setIntroLight: setIntroLight,
        didYouKnowLight: didYouKnowLight,
        setDidYouKnowLight: setDidYouKnowLight,
        reviewLight: reviewLight,
        setReviewLight: setReviewLight,
        headerLight: headerLight,
        setHeaderLight: setHeaderLight,
        footerLight: footerLight,
        setFooterLight: setFooterLight,
        productsLight: productsLight,
        setProductsLight: setProductsLight,
        formSelectLight: formSelectLight,
        setFormSelectLight: setFormSelectLight,
        formLight: formLight,
        setFormLight: setFormLight,
        productLight: productLight,
        setProductLight: setProductLight,
        priceLight: priceLight,
        setPriceLight: setPriceLight,
        inputLight: inputLight,
        setInputLight: setInputLight,
        formTextLight: formTextLight,
        setFormTextLight: setFormTextLight,
        aboutUs: aboutUs,
        setAboutUs: setAboutUs,
        navLight: navLight,
        setNavLight: setNavLight,
        notfound: notfound,
        setNotfound: setNotfound

    }

    return <DarkMode.Provider value={darkContext}>
        {props.children}
    </DarkMode.Provider>
}


export default DarkModeProvider