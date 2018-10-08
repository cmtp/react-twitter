import React, { Component } from "react";
import styles from "./Login.module.css";

class Login extends Component {
  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>
          We need that you login with your github account.
        </p>
        <button onClick={this.props.onAuth} className={styles.button}>
            <span className='fa fa-github'></span>Login with Github
        </button>
      </div>
    );
  }
}

export default Login;