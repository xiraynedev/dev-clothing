import React from 'react'
import { SignIn } from '../SignIn/SignIn.component'
import { SignUp } from '../SignUp/SignUp.component'
import './SignInAndSignUpPage.styles.scss'

export const SignInAndSignUpPage = () => {
  return (
    <div className='signin-signup-page'>
      <SignIn />
      <SignUp />
    </div>
  )
}
