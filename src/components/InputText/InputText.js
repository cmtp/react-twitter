import React, { Component } from "react";
import styles from "./InputText.module.css";

class InputText extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.props.onSendText}>
        <textarea
          className={styles.text}
          name="text"
          defaultValue={
            this.props.userNameToReply ? `@${this.props.userNameToReply}` : ""
          }
        />
        <div className={styles.buttons}>
          <button className={styles.close} onClick={this.props.onCloseText}>
            Cerrar
          </button>
          <button className={styles.send} type="submit">
            Enviar
          </button>
        </div>
      </form>
    );
  }
}
export default InputText;
