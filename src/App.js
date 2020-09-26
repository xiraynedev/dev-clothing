import React, { useState, useEffect } from 'react';
import './App.css';
import { Homepage } from './components/Homepage/Homepage.component'
import { Route, Switch } from 'react-router-dom'
import { ShopPage } from './components/ShopPage/ShopPage.component';
import { Header } from './components/Header/Header.component'
import { SignInAndSignUpPage } from './components/SignInAndSignUpPage/SignInAndSignUpPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }

      return () => {
        unsubscribeFromAuth()
      }
    })
  }, [])

  console.log(currentUser)
  
  return (
    <>
    <Header currentUser={currentUser} />
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignInAndSignUpPage} />
    </Switch>
    </>
  );
}

export default App;
