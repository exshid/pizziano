import { useReducer } from 'react'
import CartContext from "./cart-context";

const initialCart = {
    userCart: [],
    amount: 0
}

function cartReducer(state, action) {
    if (action.type === 'ADD_PIZZA') {
        const cartAmount = (+state.amount) + (+action.pizza.price) * (+action.pizza.amount);

        const existingPizzaIndex = state.userCart.findIndex(
            (pizza) => pizza.id === action.pizza.id
        );
        const existingPizza = state.userCart[existingPizzaIndex];
        let updateduserCart;

        if (existingPizza) {
            const updatedItem = {
                ...existingPizza,
                amount: existingPizza.amount + action.pizza.amount,
            };
            updateduserCart = [...state.userCart];
            updateduserCart[existingPizzaIndex] = updatedItem;
        } else {
            updateduserCart = state.userCart.concat(action.pizza);
        }




        return {
            userCart: updateduserCart,
            amount: cartAmount
        }
    }


    if (action.type === 'REMOVE_PIZZA') {
        const existingPizzaIndex = state.userCart.findIndex(
            (pizza) => pizza.id === action.id
        );
        const existingPizza = state.userCart[existingPizzaIndex];
        const cartAmount = state.amount - existingPizza.price;
        let updateduserCart;
        if (existingPizza.amount === 1) {
            updateduserCart = state.userCart.filter(pizza => pizza.id !== action.id);
        } else {
            const updatedItem = { ...existingPizza, amount: existingPizza.amount - 1 };
            updateduserCart = [...state.userCart];
            updateduserCart[existingPizzaIndex] = updatedItem;
        }

        return {
            userCart: updateduserCart,
            amount: cartAmount
        };
    }


    return initialCart;
}
const CartProvider = (props) => {
    const [cartState, dispatchCart] = useReducer(cartReducer, initialCart);
    function addPizzaToCart(pizza) {

        dispatchCart({
            type: 'ADD_PIZZA',
            pizza: pizza
        })
    };
    function removePizzafromCart(id) {
        dispatchCart({
            type: 'REMOVE_PIZZA',
            id: id
        })
    };
    const cartContext = {
        userCart: cartState.userCart,
        amount: cartState.amount,
        addPizza: addPizzaToCart,
        removePizza: removePizzafromCart
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}


export default CartProvider