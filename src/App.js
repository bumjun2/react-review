import './App.css';
import React from 'react';
import ExpensList from './Components/ExpensList';
import Hello from './Hello';

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
      <ExpensList items={expenses} />
      <Hello>
        <ul>
          <li>사과</li>
          <li>포도</li>
          <li>복숭아</li>
        </ul>
      </Hello>
    </>
  );
};

export default App;
