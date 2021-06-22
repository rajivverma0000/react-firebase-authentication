import React, { Component } from 'react';
import { compose } from 'recompose';
import { Link, withRouter } from 'react-router-dom';
import FirebaseContext, { withFirebase } from '../Session/context';
import 'D:/react-firebase-authentication/src/components/SignIn/layout.css';
import Layout from 'D:/react-firebase-authentication/src/components/SignIn/Layout';

import * as ROUTES from '../../constants/routes';
 
const SignUpPage = () => (
  <Layout>
  <div class="main1">
    <p class="sign"align="center">SignUp</p>
    <FirebaseContext.Consumer>
      {firebase => <SignUpForm firebase={firebase} />}
    </FirebaseContext.Consumer>

  </div>
  </Layout>
);
const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
  };
  
 
class SignUpFormBase extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    
  }
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
}
  onSubmit = event => {
    const { username, email, passwordOne } = this.state;
 
    this.props.firebase
      .doCreateUserWithEmailAndPassword(username,email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
 
    event.preventDefault();
  }

 
      
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
    const {
        username,
        email,
        passwordOne,
        passwordTwo,
        error,
      } = this.state;
      const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
       <input class="un"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input class="un"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Confirm Email Address"
        />
        <input class="pass"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input class="pass"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
                <button class="submit" disabled={isInvalid} type="submit">
                 Sign Up</button>
 
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
 
const SignUpLink = () => (
 
 <p class="sign">
 
    Don't have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
  </p>

);
const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;
 
export { SignUpForm, SignUpLink };