import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

import "normalize-css";

import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                photoURL: 'https://randomuser.me/api/portraits/men/16.jpg',
                email: 'cazaustre@mailnesia.com'
            }
        }
    }
  render() {
    return (
      <div className="App">
        <Header />
        <Main user={this.state.user}/>
      </div>
    );
  }
}

export default App;
