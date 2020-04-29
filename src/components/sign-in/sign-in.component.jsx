import React from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { withRouter } from 'react-router-dom';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  // created by me to prevent required input tooltip when clicked
  googleSignIn = (event) => {
    event.preventDefault();
    signInWithGoogle().then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit} className="group">
          <FormInput
            label="email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              // onClick={signInWithGoogle}
              onClick={this.googleSignIn}
              isGoogleSignedIn={auth.currentUser}
            >
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
