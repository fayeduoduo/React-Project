import React, { useContext } from 'react';
import { globalContext } from '../Contexts/GlobalState'

const IncomeExpense = () => {
    const { transactions } = useContext(globalContext)
    const amounts = transactions.map(transaction => transaction.amount)
    const income = amounts.filter(amount => amount > 0)
    const incomeTotal = income.reduce((acc, item) => (acc += item), 0)
    const expenseTotal = amounts.filter(amount => amount < 0).reduce((acc, item) => (acc += item), 0)
    
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>${incomeTotal.toFixed(2)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>-${Math.abs(expenseTotal).toFixed(2)}</p>
            </div>
        </div>
    )
}

export default IncomeExpense
