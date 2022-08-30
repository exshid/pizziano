import React, { useState, useContext } from 'react';
import Card from './UI/Card'
import PizzaFilter from './PizzaFilter';
import Product from './UI/Product';
import classes from './Products.module.css'
import PizzaContext from '../store/pizza-context';
import DarkMode from '../store/darkmode-context';

const Products = (props) => {
    const [pizzaFilter, setPizzaFilter] = useState('9.99');
    const ctxDarkMode = useContext(DarkMode)
    const ctx = useContext(PizzaContext)


    if (ctx.isLoading) {
        return (
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-light m-5" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }
    if (ctx.httpError) {
        return (
            <section className={classes.error}>
                <h4 className='m-5'>{ctx.httpError}</h4>
            </section>
        );
    }


    function pizzaChangeHandler(selected) {
        setPizzaFilter(selected)
    }

    const filteredPizza = ctx.pizzas.filter(pizza => {
        return pizza.price === pizzaFilter;

    })

    return <>
        <Card className={ctxDarkMode.productsLight}>
            <PizzaFilter selectedPizza={pizzaFilter} onPizzaFilter={pizzaChangeHandler} />
            {filteredPizza.map((product) => (
                <Product img={product.img} title={product.title} price={product.price} key={product.id} id={product.id} />
            ))}
        </Card>
    </>

}
export default Products;