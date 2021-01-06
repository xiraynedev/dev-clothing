import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from 'react-redux'
import { updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../WithSpinner/WithSpinner.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(Collection)

const ShopPage = ({match, updateCollections}) => {
    const [state, setState] = useState({loading: true})



    useEffect(() => {
        const collectionRef = firestore.collection('collections')

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            setState({loading: false})
        })

    }, [match, updateCollections])


    return (
        <div className='shop-page'>
            <Route exact path={match.path} render={props => <CollectionsOverviewWithSpinner isLoading={state.loading} {...props} />} />
            <Route exact path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={state.loading} {...props} />} />
        </div>
    )
}

const mapDispatchToProps = {
    updateCollections
}

export default connect(null, mapDispatchToProps)(ShopPage)

  

 

