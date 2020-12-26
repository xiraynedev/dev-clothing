import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";
const ShopPage = ({match}) => (
    <div className='shop-page'>
        <Route exact path={match.path} component={CollectionsOverview}/>
        <Route exact path={`${match.path}/:collectionId`} component={Collection} />
    </div>
)

export default ShopPage

  

 

