import React, { useState } from 'react'
import './SignUp.styles.scss'
import { FormInput } from '../FormInput/FormInput.component'
import { CustomButton } from '../CustomButton/CustomButton.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

export const SignUp = () => {

  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      alert('The passwords do not match')
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      await createUserProfileDocument(user, { displayName })

      setDisplayName('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')

    } catch (error) {
      console.error(error)
    }
  }

  const handleDisplayNameChange = event => {
    setDisplayName(event.target.value)
  }

  const handleEmailChange = event => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value)
  }

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='signup-form' onSubmit={handleSubmit}>
        <FormInput 
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleDisplayNameChange}
          label='Display Name'
          required
          />
        <FormInput 
          type='email'
          name='email'
          value={email}
          onChange={handleEmailChange}
          label='Email'
          required
         />
        <FormInput 
          type='password'
          name='password'
          value={password}
          onChange={handlePasswordChange}
          label='Password'
          required
          />
        <FormInput 
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          label='Confirm Password'
          required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}
