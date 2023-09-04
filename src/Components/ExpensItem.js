import React from 'react';
import './ExpensItem.css';

const ExpensItem = () => {
  const expenseDate = new Date(2023, 8, 4);
  const expenseTitle = '냠냠치킨';
  const expensePrice = 3000;

  //1자리 숫자를 2자리 숫자로 만드는 변수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  //날짜 날짜 변환 함수 정의
  const Dates = () => {
    const year = expenseDate.getFullYear();
    const month = expenseDate.getMonth();
    const date = expenseDate.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(date)}일`;
  };

  return (
    <div className="expense-item">
      <div>{Dates()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expensePrice}원</div>
      </div>
    </div>
  );
};

export default ExpensItem;
