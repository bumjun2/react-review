import React from 'react';
import './NewExpens.css';
import ExpenseForm from './ExpenseForm';

const NewExpens = ({ onAddExpense }) => {
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpense={onAddExpense} />
    </div>
  );
};

export default NewExpens;
