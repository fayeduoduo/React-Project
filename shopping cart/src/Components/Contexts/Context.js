import React, {createContext, useContext, useReducer, useEffect} from 'react';
import cartItems from '../../data';
import reducer from '../Reducer/reducer'

const CartContext = createContext()
const url='https://course-api.com/react-useReducer-cart-project'

const initialState = {
    loading: false,
    cart: [],
    total: 0,
    amount: 0,
}
const CartContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    //clear cart function
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART',           
        })
    }

    //remove products
    const remove = (id) => {
        dispatch({
            type: 'REMOVE',
            payload: id
        })
    }
    //add products
    const add = (id) => {
        dispatch({
            type: "ADD",
            payload: id
        })
    }

    //decrease products
    const decrease = (id) => {
        dispatch({
            type: "DECREASE",
            payload: id
        })
    }

    const fetchData = async() => {
        dispatch({
            type: 'LOADING'
        })
        const res = await fetch(url)
        const cart = await res.json()
        dispatch({
            type: 'DISPLAY_ITEM',
            payload: cart
        })
    }
    //total
    useEffect(() => {
        dispatch({
            type:'TOTAL'
        })
    }, [state.cart])
    
    //Request original data
    useEffect(() => {
        fetchData()
    },[])
    return (
        <CartContext.Provider value={{...state, clearCart,remove ,add, decrease, fetchData}}>
            {props.children}
        </CartContext.Provider>
    )
}

// directly apply data to all children
export const useGlobalContext = () => {
    return useContext(CartContext)
}
export default CartContextProvider;
