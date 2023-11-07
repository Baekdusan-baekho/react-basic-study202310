import React, { useRef, useState } from 'react';
import styles from './AddUsers.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button/Button';
import ErrorModal from '../UI/Modal/ErrorModal';

const AddUsers = ({ onAddUser }) => {
  // const [userValue, setUserValue] = useState({
  //   userName: '',
  //   age: '',
  // });

  //에러 상태관리
  const [error, setError] = useState(null);

  //input dom 가져오기
  const nameInput = useRef();
  const ageInput = useRef();

  // // 에러 상태 관리
  // const [error, setError] = useState(null);

  // const userNameChangeHandler = (e) => {
  //   setUserValue((prevUserValue) => ({
  //     ...prevUserValue,
  //     userName: e.target.value,
  //   }));
  // };

  // const ageChangeHandler = (e) => {
  //   setUserValue((prevUserValue) => ({
  //     ...prevUserValue,
  //     age: e.target.value,
  //   }));
  // };

  const userSubmitHandler = (e) => {
    e.preventDefault();

    console.log(nameInput.current);

    const username = nameInput.current.value;
    const age = ageInput.current.value;

    if (username.trim() === '' || age.trim() === '') {
      setError({
        title: '유효하지 않은 입력값',
        message: '입력값은 공백으로 작성하면 안됩니다!',
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: '유효하지 않은 나이의 범위',
        message: '나이는 1 이상의 숫자로 작성해 주세요!',
      });
      return;
    }

    // console.log(userValue);
    onAddUser({ username, age });

    // setUserValue({
    //   userName: '',
    //   age: '',
    // });

    nameInput.current.value = '';
    ageInput.current.value = '';
  };

  return (
    // React.Fragment == <>
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={() => setError(null)}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={userSubmitHandler}>
          <label htmlFor='username'>이름</label>
          <input
            id='username'
            type='text'
            ref={nameInput}
            // onChange={userNameChangeHandler}
            // value={userValue.userName}
          />
          <label htmlFor='age'>나이</label>
          <input
            id='age'
            type='number'
            ref={ageInput}
            // onChange={ageChangeHandler}
            // value={userValue.age}
          />
          <Button type='submit'>가입하기</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
