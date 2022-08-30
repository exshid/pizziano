import classes from './Product.module.css'
import PizzaForm from './PizzaForm';
import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import DarkMode from '../../store/darkmode-context';



const Product = (props) => {
    const ctx = useContext(DarkMode)
    const cartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        cartCtx.addPizza({
            id: props.id,
            name: props.title,
            amount: amount,
            price: props.price,
            img: props.img
        });
    };

    return <>
        <div className={`${classes.product}`}><div className={`${classes.imagecontainer}`} style={{ backgroundImage: `url(${props.img})` }}><div className={`${classes.rect}`}></div></div><h3>{props.title}</h3><div className={classes.container}><h4 className={ctx.priceLight}>${props.price}</h4>
            <PizzaForm onAddToCart={addToCartHandler} /></div>
        </div>
    </>

}
export default Product;