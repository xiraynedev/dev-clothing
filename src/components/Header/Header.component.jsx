import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import CartIcon from '../CartIcon/CartIcon.component'
import CartDropdown from '../CartDropdown/CartDropdown.component'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { auth } from '../../firebase/firebase.utils'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from "./Header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>
        {
          currentUser ?
          <OptionLink as='div' onClick={() => auth.signOut()}>
            <span>SIGN OUT</span>
          </OptionLink>
          :
          <OptionLink to='/signin'>SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { hidden ? null : <CartDropdown /> }
    </HeaderContainer>
  )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
