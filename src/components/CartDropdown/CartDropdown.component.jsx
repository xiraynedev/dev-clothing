import React from 'react'
import { CustomButton } from '../CustomButton/CustomButton.component'
import './CartDropdown.styles.scss'
import { CartItem } from "../CartItem/CartItem.component";
import { connect } from 'react-redux'

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
        {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))
        }
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
)

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
})



export default connect(mapStateToProps)(CartDropdown)