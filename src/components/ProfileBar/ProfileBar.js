import React, { Component } from "react";
import { Link } from 'react-router-dom';

import styles from "./ProfileBar.module.css";

class ProfileBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.root}>
        <Link to="/profile">
          <figure>
            <img className={styles.avatar} src={this.props.picture} alt="" />
          </figure>
        </Link>
        <span className={styles.username}> Hola @{this.props.username}!</span>
        <button onClick={this.props.onOpenText} className={styles.button}>
          <span className="fa fa-lg fa-edit" /> Tweet!
        </button>
      </div>
    );
  }
}

export default ProfileBar;
