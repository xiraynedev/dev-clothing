import React from 'react';
import './App.css';
import { Homepage } from './components/Homepage/Homepage.component'
import { Route, Link, Switch } from 'react-router-dom'
import { ShopPage } from './components/ShopPage/ShopPage.component';
import { Header } from './components/Header/Header.component'
import { SignInAndSignUpPage } from './components/SignInAndSignUpPage/SignInAndSignUpPage.component';

function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </>
  );
}

export default App;
