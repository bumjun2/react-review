import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onTogle }) => {
  const [useInput, setuseInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    setuseInput((preveUserInput) => {
      return {
        ...preveUserInput,
        title: e.target.value,
      };
    });
  };
  const priceChangeHandler = (e) => {
    setuseInput({
      ...useInput,
      price: e.target.value,
    });
  };
  const dateChangeHandler = (e) => {
    setuseInput({
      ...useInput,
      date: e.target.value,
    });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    const NewExpens = {
      id: Math.random(),
      title: useInput.title,
      price: useInput.price,
      date: new Date(useInput.date),
    };

    onSaveExpense(NewExpens);
    setuseInput({
      title: '',
      price: '',
      date: '',
    });
  };
  const cancleInsertHandler = () => {
    onTogle();
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangeHandler}
              value={useInput.title}
            />
          </div>
          <div className="new-expense__control">
            <label>Price</label>
            <input
              type="number"
              min="100"
              step="100"
              onChange={priceChangeHandler}
              value={useInput.price}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2025-12-31"
              onChange={dateChangeHandler}
              value={useInput.date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button
            type="button"
            onClick={cancleInsertHandler}
          >
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
