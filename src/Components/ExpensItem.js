import React from 'react';
import './ExpensItem.css';
import ExpensDate from './ExpensDate';
import Card from './UI/Card';

const ExpensItem = ({ title, date, price }) => {
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = price;

  //1자리 숫자를 2자리 숫자로 만드는 변수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  //날짜 날짜 변환 함수 정의
  const Dates = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  return (
    <Card className="circle">
      <div className="expense-item">
        <ExpensDate date={date} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">{price}원</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpensItem;
