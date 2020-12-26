import React from "react"
import './Checkout.styles.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../CheckoutItem/CheckoutItem.component";
import StripeCheckoutButton from "../StripeButton/StripeButton.component";

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))
        }

        <div className="total">
            <p>TOTAL: ${total}</p>
            <StripeCheckoutButton price={total} />
        </div>
        <div>
            <p className='test-warning'>Please use the following test credit card for payments:</p>
            <p className='card-number'>Card Number: 4242 4242 4242 4242</p>
            <p className='exp-date'>Expiration Date: Any future date</p>
            <p className='cvc'>CVC: Any three digits</p>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)