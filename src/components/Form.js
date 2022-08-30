import React, { useState } from 'react';
import classes from './Form.module.css'
import { useContext } from 'react';
import DarkMode from '../store/darkmode-context';

const Form = (props) => {
    const ctx = useContext(DarkMode)

    const [enteredName, setEnteredName] = useState('');
    const [enteredComment, setEnteredComment] = useState('');
    const [nameIsEmpty, setNameIsEmpty] = useState(false);
    const [commentIsEmpty, setCommentIsEmpty] = useState(false);



    function nameHandler(event) {
        setEnteredName(event.target.value)
    }

    function commentHandler(event) {
        setEnteredComment(event.target.value)
    }

    function submitHandler(event) {
        event.preventDefault();

        if (enteredName.trim().length === 0) {
            setNameIsEmpty(true);

        }
        else {
            setNameIsEmpty(false);

        }
        if (enteredComment.trim().length === 0) {
            setCommentIsEmpty(true);

        }
        else {
            setCommentIsEmpty(false);

        }
        if (enteredComment.trim().length === 0 || enteredName.trim().length === 0) {
            return;
        }
        const review = {
            title: enteredName,
            review: enteredComment
        }

        props.onSaveForm(review);
        setEnteredComment('');
        setEnteredName('');
    }

    return <form onSubmit={submitHandler} className={`${classes.form}`}>
        <div className="row g-2" style={{ width: '100%' }}>
            <div className="col-md" >
                <div className="form-floating" style={{ color: !ctx.formLight, backgroundColor: ctx.formLight }}>
                    <textarea className={ctx.formTextLight} style={{ backgroundColor: nameIsEmpty ? '#fb7a7a' : ctx.formLight }} placeholder="Write your name here" id="floatingTextarea" value={enteredName} onChange={nameHandler} />
                    <label htmlFor="floatingTextarea">Name</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating" style={{ color: !ctx.formLight, backgroundColor: ctx.formLight }}>
                    <textarea className={ctx.formTextLight} style={{ backgroundColor: commentIsEmpty ? '#fb7a7a' : ctx.formLight }} placeholder="Leave a comment here" id="floatingTextarea" value={enteredComment} onChange={commentHandler} />
                    <label htmlFor="floatingTextarea">Comment</label>
                </div>
            </div>
        </div>
        <button type="submit" className="reviewbutton btn btn-primary">Submit</button>

    </form>

}
export default Form;