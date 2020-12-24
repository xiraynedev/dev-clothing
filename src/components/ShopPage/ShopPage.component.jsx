import React from 'react'
import { CollectionPreview } from '../CollectionPreview/CollectionPreview.component'
import { connect } from 'react-redux'
import {createStructuredSelector} from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({collections}) => (
    <div className='shop-page'>
      {
        collections.map(({ id, ...collectionProps }) => {
          return (
            <CollectionPreview key={id} {...collectionProps} />
          )
        })
      }
    </div>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})


export default connect(mapStateToProps)(ShopPage)

  

 

