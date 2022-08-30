import React from 'react'

const CartContext = React.createContext({
    userCart: [],
    amount: 0,
    addPizza: (pizza) => { },
    removePizza: (id) => { }
})

export default CartContext;