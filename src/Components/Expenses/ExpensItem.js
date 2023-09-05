import React, { useState } from 'react';
import './ExpensItem.css';
import ExpensDate from './ExpensDate';
import Card from '../UI/Card';

const ExpensItem = ({ title, date, price }) => {
  //값이 변경되어 화면에 반영되어야 하는 값들은
  //useState훅을 통해 상태변수로 관리.

  //useState는 배열을 리턴하는데
  //0번째 인덱스는 관리할 상태값
  //1번째 인덱스는 상태값을 변경하는 setter함수
  const [itemTitle, setItemTitle] = useState(title);

  const formattedPrice = new Intl.NumberFormat('ko-KR').format(price);

  //버튼 가져오기
  const clickHandler = (e) => {
    // itemTitle = '안녕';
    // console.log(itemTitle);

    // state변수는 반드시 setter를 통해서 변경해야 한다.
    // setItemTitle((s) => {
    //   console.log(s);
    //   //메롱이 새로운 값이되며 기존 스냅샷과 다른 경우
    //   //화면을 리렌더링하고 같을경우 렌더링하지 않음
    //   return '메롱';
    // });
    setItemTitle('메롱');
  };

  return (
    <Card className="expense-item">
      <ExpensDate date={date} />
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{formattedPrice}원</div>
      </div>
      <button
        id="btn"
        onClick={clickHandler}
      >
        수정
      </button>
      <button
        id="btn"
        onClick={(e) => console.log('삭제')}
      >
        삭제
      </button>
    </Card>
  );
};

export default ExpensItem;
