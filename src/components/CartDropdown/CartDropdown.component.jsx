import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton.component'
import './CartDropdown.styles.scss'
import { CartItem } from "../CartItem/CartItem.component";
import { connect } from 'react-redux'
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";


const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
        {
            cartItems.length ?
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            )) : <span className='empty-message'>Your cart is empty</span>
        }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})



export default connect(mapStateToProps)(CartDropdown)