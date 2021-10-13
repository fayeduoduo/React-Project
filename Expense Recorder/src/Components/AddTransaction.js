import React, { useState, useContext } from 'react';
import { globalContext } from '../Contexts/GlobalState';


const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0);
    const {dispatch} =useContext(globalContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTransaction = {id: Math.random(), text: text, amount:Number(amount) }

        dispatch({
            type: 'ADD_TRANSACTION',
            transaction: newTransaction
        })
        setText('')
        setAmount(0)
    }

    return (
        <div>
            <h3>Add Transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='text'>Transaction Name</label>
                    <input type='text' value={text} placeholder='input name...' onChange={(e) => setText(e.target.value)} />
                </div>
                <div className='form-control'>
                    <label htmlFor='text'>Amount<br />
                    (income-plus, expense-minus)</label>
                    <input type='number' value={amount} placeholder='input amount...' onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <input type='Submit' className='btn'/>
            </form>
        </div>
    )
}

export default AddTransaction
