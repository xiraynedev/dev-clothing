import React, { useState } from 'react'
import './SignIn.styles.scss'
import '../FormInput/FormInput.component'
import { FormInput } from '../FormInput/FormInput.component'
import { CustomButton } from '../CustomButton/CustomButton.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

export const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    setEmail('')
    setPassword('')
  }

  const handleEmailChange = event => {
    
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    
    setPassword(event.target.value)
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email' 
          type='email' 
          value={email} 
          label='email'
          onChange={handleEmailChange}
          required />
        <FormInput
          type='password'
          name='password' 
          value={password} 
          label='password'
          onChange={handlePasswordChange}
          required />
        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Google Sign In</CustomButton>
        </div>
        
      </form>
    </div>
  )
}
