import React, { useEffect } from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverviewContainer from "../CollectionsOverview/CollectionsOverviewContainer.component";
import CollectionContainer from "../Collection/CollectionContainer.component";
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const ShopPage = ({ match, fetchCollectionsStartAsync }) => {

    useEffect(() => {
        fetchCollectionsStartAsync()
    }, [fetchCollectionsStartAsync])

    return (
        <div className='shop-page'>
            <Route exact path={match.path} component={CollectionsOverviewContainer} />
            <Route exact path={`${match.path}/:collectionId`} component={CollectionContainer} />
        </div>
    )
}

const mapDispatchToProps = {
    fetchCollectionsStartAsync
}

export default connect(null, mapDispatchToProps)(ShopPage)

  

 

