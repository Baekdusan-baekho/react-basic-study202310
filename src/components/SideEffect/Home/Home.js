import React, { useContext } from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

const Home = () => {
  // const authCtx = useContext(AuthContext);
  const { onLogout } = useContext(AuthContext);
  // console.log('authCtx: ', authCtx);

  return (
    // <AuthContext.Consumer>
    //   {(context) => {
    //     return (
    //       <Card className={styles.home}>
    //         <h1>Welcome back!</h1>
    //         <Button onClick={context.onLogout}>Logout</Button>
    //       </Card>
    //     );
    //   }}
    // </AuthContext.Consumer>
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
