import React, { useRef, useContext } from 'react';
import Input from './Input';
import DarkMode from '../../store/darkmode-context';
import classes from './Product.module.css';

const PizzaForm = (props) => {
    const amountInputRef = useRef();
    const ctx = useContext(DarkMode)

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 10
        ) {
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };
    return <>
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '10',
                    step: '1',
                    defaultValue: '1'
                }} />
            <button className={ctx.productLight}>
                <i className="bi bi-plus-square"></i>
            </button>
        </form>
    </>

}
export default PizzaForm;