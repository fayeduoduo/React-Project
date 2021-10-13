import React, { useContext } from 'react';
import { globalContext } from '../Contexts/GlobalState';
import Transaction from './Transaction';

const History = () => {
    const contexts = useContext(globalContext)
    const {transactions} = contexts

    return (
        <div>
            <h3>History Transaction</h3>
            <ul className='list'>
                {transactions.map(transaction => <Transaction transaction={transaction} key={transaction.id}/>)}
            </ul>
        </div>
    )
}

export default History
