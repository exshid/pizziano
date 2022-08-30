import React, { useContext } from 'react';
import DarkMode from '../../store/darkmode-context';

const Reviews = (props) => {
    const ctx = useContext(DarkMode)

    return <>
        <div className={`${ctx.reviewLight}`}>
            <h3>{props.title}</h3>
            <p>{props.review}</p>
        </div>
    </>

}
export default Reviews;