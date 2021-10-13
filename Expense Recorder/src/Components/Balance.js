import React, { useContext } from 'react';
import { globalContext } from '../Contexts/GlobalState';

const Balance = () => {
    const {transactions} = useContext(globalContext)
    const amount = transactions.map(transaction => transaction.amount)
    const total = amount.reduce((acc,item) =>(acc += item), 0).toFixed(2)
    
    return (
        <div>
            <h4>Balance </h4>
            <h2>${total}</h2>
        </div>
    )
}

export default Balance
