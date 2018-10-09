import React, { Component } from "react";
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from "./ProfileBar.module.css";

const propTypes = {
    picture: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    onOpenText: PropTypes.func.isRequired
}

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
          <button onClick={this.props.onLogout} className={styles.button}>
              <span className='fa fa-sign-out'></span> Salir
          </button>
      </div>
    );
  }
}

ProfileBar.propTypes = propTypes;

export default ProfileBar;
