import './App.css';
import React from 'react';
import ExpensList from './Components/ExpensList';

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

  console.log('App 실행');
  return (
    <>
      <ExpensList items={expenses} />
    </>
  );
};

export default App;
