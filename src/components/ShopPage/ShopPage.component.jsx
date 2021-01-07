import React, { useEffect } from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";
import { connect } from 'react-redux'
import WithSpinner from "../WithSpinner/WithSpinner.component";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

const ShopPage = ({ match, isCollectionFetching, fetchCollectionsStartAsync }) => {

    useEffect(() => {
        fetchCollectionsStartAsync()
    }, [fetchCollectionsStartAsync])

    return (
        <div className='shop-page'>
            <Route exact path={match.path} render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />} />
            <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props} />} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching
})

const mapDispatchToProps = {
    fetchCollectionsStartAsync
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)

  

 

