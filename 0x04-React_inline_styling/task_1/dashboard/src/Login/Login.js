import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <React.Fragment>
      <div className={css(loginStyles.appBody)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" className={css(loginStyles.appInput)} />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={css(loginStyles.appInput)} />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const loginStyles = StyleSheet.create({
  appBody: {
    padding: "36px 24px",
  },
  appInput: {
    margin: "0 16px 0 8px",
  }
})

export default Login;
