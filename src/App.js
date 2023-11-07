import React, { useEffect, useState } from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Home from './components/SideEffect/Home/Home';
import Login from './components/SideEffect/Login/Login';

const App = () => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링 될 때 localStorage를 확인해서
  // 현재 login-flag가 존재하는지 검사.
  console.log('로그인 검사 수행'); //렌더링 될 때마다 실행

  // 목표: 기존에 로그인 한 사람인지 확인하는 코드는
  //       리렌더링 될 때마다 실행되면 안됨! useeffect가 리렌더링 안되게 해줌
  useEffect(() => {
    console.log('useEffect 실행! - 최초 단 한번만 실행됨!');
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
    }
  }, []); // 첫번째 매개값 (함수) 두번째 매개값 (배열)

  // 서버로 로그인을 요청하는 함수 (나중에는 fetch를 통한 백엔드와의 연계가 필요.)
  const loginHandler = (email, password) => {
    // 로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장.
    localStorage.setItem('login-flag', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('login-flag');
    setIsLoggedIn(false);
  };

  return (
    <>
      <MainHeader
        isAuthenticated={isLoggedIn}
        onLogout={logoutHandler}
      />
      <main>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;

//
//
//
// const [userList, setUserList] = useState([]); //아무것도 없는 빈 배열

// //  자식이 부모에게 데이터를 보낸다 부모는 자식이 선언할 수 있게 함수를 만든다
// const addUserHandler = (user) => {
//   console.log(user);
// eslint-disable-next-line max-len
//   setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
// };

// return (
// <div>
//   <AddUsers onAddUser={addUserHandler} />
//   <UserList users={userList} />
// </div>
//
//
//
//
//
//
//
//
//

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import React, { useState } from 'react';
// import './App.css';
// // import Expenses from './components/Expenses/Expenses';
// // import NewExpense from './components/NewExpense/NewExpense';
// import CourseInput from './components/CourseGoals/CourseInput';
// import CourseList from './components/CourseGoals/CourseList';

// // 함수명은 파일명으로 지정하는 것이 정석
// const DUMMY_DATA = [
//   {
//     id: 'g1',
//     text: '리액트 컴포넌트 스타일링 마스터하기',
//   },
//   {
//     id: 'g2',
//     text: 'UI 프로그래밍 삽고수 되기',
//   },
// ];

// const App = () => {
//   const [goals, setGoals] = useState(DUMMY_DATA);

//   //Input에게 전달할 함수
//   const addGoalHandler = (text) => {
//     console.log('전달받은 텍스트: ', text);
//     const newGoal = {
//       id: Math.random().toString(),
//       text: text,
//     };

//     // 상태변수(배열) 수정
//     // setGoals([...goals, newGoal]);
//     setGoals((prevGoals) => [...prevGoals, newGoal]); //가장 최신의 값이 들어온다
//   };

//   // 삭제 이벤트 핸들러를 CourseIte까지 내려보내야 됨.
//   const deleteGoalHandler = (id) => {
//     // console.log('전달된 id: ', id);
//     // const updateGoals = [...goals]; //상태 배열 그대로 복사해서 가져옴.
//     // const index = updateGoals.findIndex((goal) => goal.id === id);
//     // // 번호를 찾아서 인덱스 부여
//     // console.log(index);
//     // updateGoals.splice(index, 1); //인덱스와 지울 객체 갯수 배열 삭제하는 자바스크립트 명령어

//     // const updateGoals = goals.filter((goal) => goal.id !== id);
//     //아이디가 일치하지 않는 것만 새 배열에 담음 위에 것고 같은 결과
//     // 아이디가 같은 것은 배열에 들어오지 않음

//     // setGoals(updateGoals);
//     setGoals(goals.filter((goal) => goal.id !== id));
//   };

//   //courseList 조건부 렌더링
//   let listContent = (
//     <p
//       style={{
//         color: 'red',
//         fontSize: '2em',
//         textAlign: 'center',
//       }}
//     >
//       목표를 등록해 주세요!!
//     </p>
//   );
//   // 바깥쪽 중괄호 스타일 프롭스 때문 || 안쪽 중괄호 스타일객체를 자바스크립트 함수로 하기 위해
//   if (goals.length > 0) {
//     listContent = (
//       <CourseList
//         items={goals}
//         onDelete={deleteGoalHandler}
//       />
//     );
//   }

//   return (
//     <div>
//       <section id='goal-form'>
//         <CourseInput onAdd={addGoalHandler} />
//       </section>
//       <section id='goals'>{listContent}</section>
//     </div>
//   );
// };
// //onAdd라는 이름으로 데이터를 보냄

// export default App;

// //  바뀐것이 인식되어야 한다.
// // 스프레드 useState훅 사용

// // // 지출 항목 객체 배열
// // const expenses = [
// //   {
// //     id: 1,
// //     title: '바나나',
// //     price: 20000,
// //     date: new Date(2023, 3 - 1, 23),
// //   },
// //   {
// //     id: 2,
// //     title: 'BBQ치킨',
// //     price: 20000,
// //     date: new Date(2022, 5 - 1, 21),
// //   },
// //   {
// //     id: 3,
// //     title: '도미노피자',
// //     price: 35000,
// //     date: new Date(2023, 7 - 1, 4),
// //   },
// //   {
// //     id: 4,
// //     title: '엽기떡볶이',
// //     price: 17000,
// //     date: new Date(2021, 3 - 1, 28),
// //   },
// // ];

// // // 지출 객체배열을 상태변수로 관리
// // const [expenseList, setExpenseList] = useState(expenses);

// // console.log('App 실행~');

// // // ExpenseForm에게 내려보낼 함수
// // const addExpenseHandler = (newExpense) => {
// //   console.log('App 컴포넌트에서 응답함!');
// //   console.log(newExpense);

// //   const modifyExpense = {
// //     ...newExpense,
// //     id: expenseList[expenseList.length - 1].id + 1,
// //   };
// //   console.log(modifyExpense);
// //   setExpenseList([...expenseList, modifyExpense]);
// //   console.log(expenseList);
// // };

// // return (
// //   <>
// //     <NewExpense onAddExpense={addExpenseHandler} />
// //     <Expenses items={expenseList} />
// //     {/* <Hello>
// //       <ul>
// //         <li>사과</li>
// //         <li>포도</li>
// //         <li>복숭아</li>
// //       </ul>
// //     </Hello> */}
// //   </>
// // );
