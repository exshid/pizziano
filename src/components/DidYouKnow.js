import React, { useContext } from 'react';
import classes from './DidYouKnow.module.css'
import DarkMode from '../store/darkmode-context';
import Reviews from './UI/Reviews';
import Form from './Form';
const DidYouKnow = (props) => {
    const ctx = useContext(DarkMode)

    function formSaveHandler(review) {
        const formData = {
            ...review,
            id: Math.random()
        }
        props.onAddReviews(formData)
    }


    return <>
        <div className={`${ctx.didYouKnowLight}`}>

            <div className={`${classes.didyouknowleft}`}>
                <div className={`${classes.container}`}>
                    <h2>Tell us what you think</h2>
                    <div className={classes.review}>
                        {props.reviews.map((comment) => (
                            <Reviews title={comment.title} review={comment.review} key={comment.id} />

                        ))}
                    </div>
                </div>
                <Form onSaveForm={formSaveHandler} />

            </div>
            <div className={`${classes.didyouknowright}`}>
                <div className={`${classes.didyouknowboxinner}`}>
                    <h3 className={`${classes.didyouknowtitle} ${classes.title}`}>Lorem ipsum dolor sit amet</h3>
                    <p className={`${classes.title}`}>Ut accumsan consectetur orci. Phasellus vehicula bibendum dolor sed pulvinar. Nulla facilisi.</p>
                </div>
            </div>
        </div>
    </>

}
export default DidYouKnow;