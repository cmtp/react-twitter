import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Profile from "./components/Profile/Profile";
import Login from './components/Login/Login';

import "normalize-css";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        photoURL: "https://randomuser.me/api/portraits/men/16.jpg",
        email: "jperez@mailnesia.com",
        displayName: "Juan Perez",
        location: "Cochabamba"
      }
    };

    this.handleOnAuth = this.handleOnAuth.bind(this);
  }

  handleOnAuth() {
    console.log('Auth');
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route
            exact
            path="/"
            render={() => {
              if (this.state.user) {
                return <Main user={this.state.user} />;
              } else {
                return <Login onAuth={this.handleOnAuth}/>
              }
            }}
          />

          <Route
            path="/profile"
            render={() => (
              <Profile
                picture={this.state.user.photoURL}
                username={this.state.user.email.split("@")[0]}
                displayName={this.state.user.displayName}
                location={this.state.user.location}
                emailAddress={this.state.user.email}
              />
            )}
          />

          <Route
            path="/user/:username"
            render={({ match }) => {
              return <Profile displayName={match.params.username}
                              username={match.params.username}
              />
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
