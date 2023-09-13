import React, { useState } from 'react';
import ExpensItem from '../Expenses/ExpensItem';
import ExpenseFilter from './ExpenseFilter';
import './ExpensList.css';

const ExpensList = ({ items }) => {
  // 선택된 연도 상태변수
  const [filterdYear, setFilterdYear] = useState(
    new Date().getFullYear().toString()
  );
  // 자식 컴퍼넌트 ExpensFilter에 있는
  // 선택 연도를 끌어올리는 콜백 함수
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

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

  const filterdItems = items.filter(
    (item) => item.date.getFullYear().toString() === filterdYear
  );

  let expensContent = <p>아직 등록된 지출이 없습니다.</p>;

  if (filterdItems.length > 0) {
    expensContent = filterdItems.map(({ id, title, price, date }) => (
      <ExpensItem
        key={id}
        title={title}
        price={price}
        date={date}
      />
    ));
  }

  return (
    <div className="expenses">
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selectd={filterdYear}
      />

      {expensContent}
    </div>
  );
};

export default ExpensList;
