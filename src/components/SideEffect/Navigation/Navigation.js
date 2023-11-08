import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../../store/auth-context';

const Navigation = () => {
  const { isLoggedIn, onLogout } = useContext(AuthContext);

  return (
    // <AuthContext.Consumer>
    //   {(context) => {
    //     return (
    //       <nav className={classes.nav}>
    //         <ul>
    //           {context.isLoggedIn && (
    //             <li>
    //               <a href='/'>Users</a>
    //             </li>
    //           )}
    //           {context.isLoggedIn && (
    //             <li>
    //               <a href='/'>Admin</a>
    //             </li>
    //           )}
    //           {context.isLoggedIn && (
    //             <li>
    //               <button onClick={context.onLogout}>Logout</button>
    //             </li>
    //           )}
    //         </ul>
    //       </nav>
    //     );
    //   }}
    // </AuthContext.Consumer> // 소비자

    <nav className={classes.nav}>
      <ul>
        {isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
