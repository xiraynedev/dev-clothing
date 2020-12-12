import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
import { Homepage } from './components/Homepage/Homepage.component'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ShopPage } from './components/ShopPage/ShopPage.component';
import Header from './components/Header/Header.component'
import { SignInAndSignUpPage } from './components/SignInAndSignUpPage/SignInAndSignUpPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App({ currentUser, setCurrentUser }) { 

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
      <Route exact path='/signin' render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
    </Switch>
    </>
  );
}

const mapStateToProps = ({ user }) => {
  return {
    currentUser: user.currentUser
  }
}

const mapDispatchToProps = {
  setCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(App)







