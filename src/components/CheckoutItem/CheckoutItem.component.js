import React from 'react'
import './CheckoutItem.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name, imageUrl, quantity, price} = cartItem
    return (

        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10007;</div>
        </div>
    )
}

const mapDispatchToProps = {
    clearItem: clearItemFromCart
}
export default connect(null, mapDispatchToProps)(CheckoutItem)