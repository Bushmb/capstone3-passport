import React, { Component } from 'react';
import { Button } from 'reactstrap';


// function to pass to buttons which was clicked
// pass down our stories to the card container

class Login extends Component {

  constructor(props) {
    super(props);
    this.makeAuth = this.makeAuth.bind(this);
  }

  makeAuth() {
    window.location.replace('http://localhost:3001/auth/twitter')
  }

  render() {
    return(
      <div className="container">
        <h1>Login</h1>
        <p>Welcome! Please Login.</p>
       <Button onClick={this.makeAuth}>Sign In with Twitter</Button>
      </div>

    )
  }
}

export default Login;

