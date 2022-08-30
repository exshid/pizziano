import React, { useState, useEffect } from 'react';

import PizzaContext from "./pizza-context";
const PizzaProvider = (props) => {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);


    useEffect(() => {
        async function fetchPizza() {

            const response = await fetch('https://pizza-ea68d-default-rtdb.europe-west1.firebasedatabase.app/pizza.json');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const responseData = await response.json();

            const pizzaArr = []

            for (const key in responseData) {
                pizzaArr.push({
                    id: key,
                    title: responseData[key].name,
                    price: responseData[key].price.toString(),
                    img: responseData[key].img
                })
            }
            setPizzas(pizzaArr);
            setIsLoading(false);

        };
        fetchPizza().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });

    }, []);


    const pizzaContext = {
        pizzas: pizzas,
        isLoading: isLoading,
        httpError: httpError
    }
    return <PizzaContext.Provider value={pizzaContext}>
        {props.children}
    </PizzaContext.Provider>
}


export default PizzaProvider