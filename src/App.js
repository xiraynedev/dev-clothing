import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { Homepage } from './components/Homepage/Homepage.component'
import { Route, Switch } from 'react-router-dom'
import { ShopPage } from './components/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component'
import { SignInAndSignUpPage } from './components/SignInAndSignUpPage/SignInAndSignUpPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App({ setCurrentUser }) {

  useEffect(() => {

    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if(userAuth) {
        
      const userRef = await createUserProfileDocument(userAuth)

      userRef.onSnapshot(snapShot => {
        setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
        })
      })
      } else {
        setCurrentUser(userAuth)
      }
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [setCurrentUser])
  
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

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(null, mapDispatchToProps)(App)







