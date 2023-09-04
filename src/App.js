import './App.css';
import React from 'react';
import ExpensItem from './Components/ExpensItem';

const App = () => {
  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 5 - 1, 3),
    },
    {
      title: '샤인머스캣',
      price: 5000,
      date: new Date(2023, 12 - 1, 4),
    },
    {
      title: '멜론',
      price: 5000,
      date: new Date(2023, 1 - 1, 23),
    },
  ];
  return (
    <>
      <ExpensItem
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      />
      <ExpensItem
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      />
      <ExpensItem
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      />
    </>
  );
};

export default App;
