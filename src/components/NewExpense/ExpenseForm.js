import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense, onToglle }) => {
  // const [title, setTitle] = useState('');
  // const [price, setPrice] = useState('');
  // const [date, setDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    price: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    // 한개만 부를 때
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,

    //   // title: e.target.value,
    //   // price: userInput.price,
    //   // date: userInput.date,
    // });

    // 정보 바꾸기
    setUserInput((prevUserInput) => {
      // console.log(param);
      return {
        ...prevUserInput,
        title: e.target.value,
      };
    });
    // setTitle(e.target.value);
    // title = e.target.value;
    // console.log(title);
    // console.log(e.target.value);
  };

  const priceChangeHandler = (e) => {
    // setPrice(e.target.value);
    // price = e.target.value;
    // console.log(title);
    // console.log(e.target.value);
    setUserInput({
      ...userInput,
      price: e.target.value,
    });
  };

  const dateChangeHandler = (e) => {
    // setDate(e.target.value);
    // date = e.target.value;
    // console.log(e.target.value);
    setUserInput({
      ...userInput,
      date: e.target.value,
    });
  };

  //NewExpense로 만든 데이터를 보냄
  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단
    // console.log('submit 버튼을 누름!');
    // console.log(userInput);
    // console.log(onSaveExpense);

    const newExpense = {
      title: userInput.title,
      // price: Number(userInput.price),
      price: +userInput.price, // +: 플러스 기호만 붙여도 정수로 변경할 수 있다.
      date: new Date(userInput.date),
    };

    onSaveExpense(newExpense);

    // const newExpense = {
    //   title: title,
    //   price: price,
    //   date: date,
    // };
    // console.log(newExpense);

    // 입력창 리셋
    setUserInput({
      title: '',
      price: '',
      date: '',
    });

    onToglle();
  };

  const cancelInsertHandler = () => {
    console.log('취소 버튼 누름!');
    onToglle();
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={userInput.title}
          />
        </div>
        <div className='new-expense__control'>
          <label>Price</label>
          <input
            type='number'
            min='100'
            step='100'
            onChange={priceChangeHandler}
            value={userInput.price}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2025-12-31'
            onChange={dateChangeHandler}
            value={userInput.date}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button
          type='button'
          onClick={cancelInsertHandler}
        >
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
