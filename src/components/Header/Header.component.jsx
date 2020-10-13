import React from 'react'
import { Link } from 'react-router-dom'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'

export const Header = ({ currentUser }) => {
  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser ?
          <div className='option' onClick={() => auth.signOut()}>
            <span>SIGN OUT</span>
          </div>
          :
          <Link to='/signin' className='option'>SIGN IN</Link>
        }
      </div>
    </div>
  )
}
