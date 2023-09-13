import React, { useState } from 'react';
import './NewExpens.css';
import ExpenseForm from './ExpenseForm';

const NewExpens = ({ onAddExpense }) => {
  const [expenseTogle, setExpenseTogle] = useState(false);

  const startInsertModeHandler = () => setExpenseTogle(true);

  const stopInsertModeHandler = () => setExpenseTogle(false);

  let newExpenseContent = (
    <button onClick={startInsertModeHandler}>새로운 지출 추가하기</button>
  );
  if (expenseTogle) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpense={onAddExpense}
        onTogle={stopInsertModeHandler}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpens;
