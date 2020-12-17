import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropdown from '../CartDropdown/CartDropdown.component'
import './Header.styles.scss'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'

const Header = ({ currentUser, hidden }) => {
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
        <CartIcon />
      </div>
      { hidden ? null : <CartDropdown /> }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
