import React, { useContext } from 'react';
import DarkMode from '../../store/darkmode-context';

const Input = React.forwardRef((props, ref) => {
    const ctx = useContext(DarkMode)

    return <>
        <label htmlFor='pizza-amount' className='visually-hidden'>Amount</label>
        <input id='pizza-amount' ref={ref} {...props.input} className={ctx.inputLight} />
    </>
});

export default Input;