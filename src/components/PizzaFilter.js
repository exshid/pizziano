import React from 'react';
import { useContext } from 'react';
import DarkMode from '../store/darkmode-context';



const PizzaFilter = (props) => {
    const ctx = useContext(DarkMode)
    function pizzaFilterHandler(event) {
        props.onPizzaFilter(event.target.value);
    }
    return (
        <select className={ctx.formSelectLight} aria-label="Pizza filter" value={props.pizzaFilter} onChange={pizzaFilterHandler}>
            <option value="9.99">$9.99</option>
            <option value="19.99">$19.99</option>
        </select>
    )
}
export default PizzaFilter;
