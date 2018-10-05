import React, { Component } from "react";
import styles from "./header.module.css";

class Header extends Component {
  render() {
    return (
      <header className={styles.root}>
        <h1 className={styles.logo}>React Twitter</h1>
      </header>
    );
  }
}

export default Header;
