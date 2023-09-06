import React from 'react';
import ExpensItem from '../Expenses/ExpensItem';
import ExpenseFilter from './ExpenseFilter';

const ExpensList = ({ items }) => {
  // 자식 컴퍼넌트 ExpensFilter에 있는
  // 선택 연도를 끌어올리는 콜백 함수
  const filterChangeHandler = (selectedYear) => {};

  //ExpensItem을 동적 렌더링하기
  // const iterateExpensItem = () => {
  //   return items.map((item) => (
  //     <ExpensItem
  //       title={item.title}
  //       price={item.price}
  //       date={item.date}
  //     />
  //   ));
  // };

  return (
    <div className="expense">
      <ExpenseFilter onChangeFilter={filterChangeHandler} />

      {items.map(({ id, title, price, date }) => (
        <ExpensItem
          key={id}
          title={title}
          price={price}
          date={date}
        />
      ))}
    </div>
  );
};

export default ExpensList;
