import React from 'react'
import './CheckoutItem.styles.scss'
import {connect} from 'react-redux'
import {clearItemFromCart, addItem, removeItem} from "../../redux/cart/cart.actions";

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => {
    const {name, imageUrl, quantity, price} = cartItem
    return (

        <div className='checkout-item'>
            <div className="image-container">
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10007;</div>
        </div>
    )
}

const mapDispatchToProps = {
    clearItem: clearItemFromCart,
    addItem: addItem,
    removeItem: removeItem
}
export default connect(null, mapDispatchToProps)(CheckoutItem)