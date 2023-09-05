import React from 'react';
import ExpensItem from './ExpensItem';

const ExpensList = ({ items }) => {
  return (
    <div className="expense">
      <ExpensItem
        title={items[0].title}
        price={items[0].price}
        date={items[0].date}
      />
      <ExpensItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
      <ExpensItem
        title={items[1].title}
        price={items[1].price}
        date={items[1].date}
      />
    </div>
  );
};

export default ExpensList;
