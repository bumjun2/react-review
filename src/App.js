import './App.css';
import React, { useState } from 'react';
import ExpensList from './Components/Expenses/ExpensList';
import NewExpens from './Components/NewExpens/NewExpens';

const App = () => {
  const expenses = [
    {
      id: 1,
      title: '바나나',
      price: 2000,
      date: new Date(2023, 5 - 1, 3),
    },
    {
      id: 2,
      title: '샤인머스캣',
      price: 5000,
      date: new Date(2023, 12 - 1, 4),
    },
    {
      id: 3,
      title: '멜론',
      price: 5000,
      date: new Date(2023, 1 - 1, 23),
    },
    {
      id: 4,
      title: '수박',
      price: 10000,
      date: new Date(2021, 3 - 1, 28),
    },
  ];

  //지출객체배열을 상태변수로 관리
  const [expenseList, setExpenseList] = useState(expenses);

  const onAddExpenseHandler = (NewExpens) => {
    console.log(NewExpens);
    setExpenseList([...expenseList, NewExpens]);
  };

  return (
    <>
      <NewExpens onAddExpense={onAddExpenseHandler} />
      <ExpensList items={expenseList} />
    </>
  );
};

export default App;
