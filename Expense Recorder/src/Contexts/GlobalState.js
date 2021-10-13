import React, { useReducer, createContext, useEffect} from 'react';
import AppReducer from '../Reducers/AppReducer';

const initalState = {
    transactions: []
}
//set up context
export const globalContext = createContext(initalState)

const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initalState, () => {
        const data = localStorage.getItem('transactions')
        return data.length > 0 ? JSON.parse(data) : {}
    })
 
    
    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(state))
    },[state])

    return (
        <globalContext.Provider value={{transactions: state.transactions, dispatch}}>
            {props.children}
        </globalContext.Provider>
    )
}

export default GlobalProvider
