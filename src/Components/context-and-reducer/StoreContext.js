import { createContext, useReducer } from "react"
import  { StoreReducer, initialState } from "./Reducer";



export const StoreContext = createContext();


export const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(StoreReducer, initialState)



    const addToBasket = (product) => {
        const updateBasket = state.products;
        updateBasket.push(product);

        updatePrice(updateBasket);


        dispatch({
            type:"add",
            payload: updateBasket
        });
    }



    const removeToBasket = (product) => {
        const updateBasket = state.products.filter((currentProduct) => currentProduct.name !== product.name);

        updatePrice(updateBasket);

        dispatch({
            type:"remove",
            payload: updateBasket
        });
    }



    const updatePrice = (products) => {
        let total = 0;

        products.forEach(product => {
            total += product.price
        });

        dispatch({
            type:"update price",
            payload: total
        })
    }



    const value =  {
        total: state.total,
        products: state.products,
        addToBasket,
        removeToBasket,
    }



    return <StoreContext.Provider value={value}>
        {children}
    </StoreContext.Provider>

}

