import React from 'react';

import './sign-in-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';

const SignInUpPage = () => (
  <div className="sign-in-up">
    <h1>Sign in or Sign Up</h1>
    <div className="sign-in">
      <SignIn />
    </div>
  </div>
);

export default SignInUpPage;
