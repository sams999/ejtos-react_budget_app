

import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleEditBudget = (e)=>{
        if(e.target.value<totalExpenses) alert("You cannot reduce the budget value lower than the spending")
        else if (e.target.value> 20000) alert("Value cannot exceed 20000")
        else dispatch({type: "SET_BUDGET", payload: e.target.value})        
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span><input type="number" step={10} value={budget} onChange={handleEditBudget}/>
        </div>
    );
};
export default Budget;