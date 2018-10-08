import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import firebase from 'firebase';

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
      user: undefined
    };

    this.handleOnAuth = this.handleOnAuth.bind(this);
  }

  componentWillMount() {
      firebase.auth().onAuthStateChanged( user => {
          if( user ) {
              this.setState({
                  user
              })
          } else {
              this.setState({ user: undefined })
          }
      })
  }

  handleOnAuth() {
    const provider = new firebase.auth.GithubAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then( result => console.log(`${result.user.email} ha iniciado sesion`))
        .catch( error => console.log(`Error ${error.code}: ${error.message}`));
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
