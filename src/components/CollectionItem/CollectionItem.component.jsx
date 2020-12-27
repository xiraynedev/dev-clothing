import React from 'react'
import './CollectionItem.styles.scss'
import { connect } from 'react-redux'
import {CustomButton} from "../CustomButton/CustomButton.component";
import {addItem} from "../../redux/cart/cart.actions";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item
    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage: `url(${imageUrl})`
            }}/>
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton className='custom-button' onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = {
    addItem
}

export default connect(null, mapDispatchToProps)(CollectionItem)
