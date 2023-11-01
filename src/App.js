import React from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import Hello from './components/Hello';
import NewExpense from './components/NewExpense/NewExpense';

// 함수명은 파일명으로 지정하는 것이 정석
const App = () => {
  // 지출 항목 객체 배열

  const expenses = [
    {
      title: '바나나',
      price: 2000,
      date: new Date(2023, 3 - 1, 23),
    },
    {
      title: 'BBQ치킨',
      price: 20000,
      date: new Date(2023, 5 - 1, 21),
    },
    {
      title: '도미노피자',
      price: 35000,
      date: new Date(2023, 7 - 1, 4),
    },
    {
      title: '엽기떡볶이',
      price: 17000,
      date: new Date(2023, 3 - 1, 28),
    },
  ];

  console.log('App 실행~');

  // ExpenseForm에게 내려보낼 함수
  const addExpenseHandler = (newExpense) => {
    console.log('App 컴포넌트에서 응답함!');
    console.log(newExpense);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      {/* <Hello>
        <ul>
          <li>사과</li>
          <li>포도</li>
          <li>복숭아</li>
        </ul>
      </Hello> */}
    </>
  );
};

export default App;
