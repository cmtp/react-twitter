import React, { Component } from "react";
import PropTypes from "prop-types";

import styles from "./Login.module.css";

const propTypes = {
  onAuth: PropTypes.func.isRequired
};

class Login extends Component {
  render() {
    return (
      <div className={styles.root}>
        <p className={styles.text}>
          We need that you login with your github account.
        </p>
        <button onClick={this.props.onAuth} className={styles.button}>
          <span className="fa fa-github" />
          Login with Github
        </button>
      </div>
    );
  }
}
Login.propTypes = propTypes;

export default Login;
