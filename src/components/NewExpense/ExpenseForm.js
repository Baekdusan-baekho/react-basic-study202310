import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpense }) => {
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

  const formSubmitHandler = (e) => {
    e.preventDefault(); // submit 차단
    // console.log('submit 버튼을 누름!');
    // console.log(userInput);
    // console.log(onSaveExpense);

    onSaveExpense(userInput);

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
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
