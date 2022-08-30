import classes from './Cart.module.css'
import React, { useContext, useState } from 'react';
import CartContext from '../store/cart-context'
const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const [showCart, setShowCart] = useState(true)
    const amount = cartCtx.amount.toFixed(2);
    const emptyCart = cartCtx.userCart.length > 0;
    const cartPizzaRemoveHander = (id) => {
        cartCtx.removePizza(id);
    };
    const cartPizzaAddHandler = (pizza) => {
        cartCtx.addPizza({ ...pizza, amount: 1 });
    };


    const Cart = cartCtx.userCart.map((pizza) => (

        <div key={pizza.id} className={`${classes.product}`}>
            <div className={`${classes.imagecontainer}`}
                style={{ backgroundImage: `url(${pizza.img})` }}><div className={`${classes.rect}`}></div>
            </div ><div className={`${classes.title}`}><h4 className={classes.pizzname}>{pizza.name},</h4>
                <h4>${(pizza.price * pizza.amount).toFixed(2)}, {pizza.amount}</h4></div>
            <div><button className={classes.remove} onClick={cartPizzaRemoveHander.bind(null, pizza.id)}><i className="bi bi-dash-circle"></i></button>
                <button className={classes.add} onClick={cartPizzaAddHandler.bind(null, pizza)}><i className="bi bi-plus-circle"></i>
                </button></div>
        </div>

    )
    )
    function orderHandler() {
        setShowCart(false)
    }
    function cancelOrderHandler() {
        setShowCart(true)
    }
    return (<div>
        {showCart && Cart}
        <li>{showCart && `Total: $${amount}`}</li>
        {showCart && emptyCart && <li> <button onClick={orderHandler} className={classes.button}>Order</button></li>}
        {!showCart && <><p>Done! We've recieved your order.</p><li> <button onClick={cancelOrderHandler} className={classes.button}>Cancel your order</button></li></>}
    </div>
    )
}
export default Cart;
