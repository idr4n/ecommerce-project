import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component';
import { auth } from './firebase/firebase.utils';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={ShopPage} />
      {/* <Route exact path="/signin" component={SignInUpPage} /> */}
      <Route
        exact
        path="/signin"
        render={() =>
          auth.currentUser ? <Redirect to={'/'} /> : <SignInUpPage />
        }
      />
    </Switch>
  );
};

export default Routes;
