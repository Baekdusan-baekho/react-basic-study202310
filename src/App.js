import React from 'react';
import './App.css';
import Expenses from './components/Expenses';
import Hello from './components/Hello';
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
  ];

  console.log('App 실행~');

  return (
    <>
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
