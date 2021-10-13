import React, {useContext} from 'react';
import { globalContext } from '../Contexts/GlobalState';

const Transaction = ({ transaction }) => {
    const { amount, id, text } = transaction;
    const {dispatch} = useContext(globalContext)
    
    const sign = transaction.amount < 0 ? '-' : '';
    const name = transaction.amount < 0 ? 'minus' : 'plus'
    const productName = `${text.substring(0, 1).toUpperCase()}${text.substring(1, text.length).toLowerCase()}` 

    return (
        <li key={id} className={name}>
            {productName}
            {/* Math.abs() */}
            <span>{sign}${Math.abs(amount)}</span>
            <button className='delete-btn' onClick={()=> dispatch({type: 'DELETE_TRANSACTION', id: transaction.id})} >
                <i className="far fa-trash-alt"></i>
            </button>
        </li>
    )
}

export default Transaction
