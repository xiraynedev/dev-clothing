import React from 'react'
import './Collection.styles.scss'
import {connect} from 'react-redux'
import {selectCollection} from "../../redux/shop/shop.selectors";
import CollectionItem from "../CollectionItem/CollectionItem.component";

const Collection = ({collection}) => {
    const {title, items} = collection
    return (
        <div className="collection">
            <h2 className='title'>{title}</h2>
            <div className="items">
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)