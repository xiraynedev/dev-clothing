import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from "../CollectionsOverview/CollectionsOverview.component";
import Collection from "../Collection/Collection.component";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from 'react-redux'
import { updateCollections } from "../../redux/shop/shop.actions";

const ShopPage = ({match, updateCollections}) => {

    useEffect(() => {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })

    }, [match, updateCollections])


    return (
        <div className='shop-page'>
            <Route exact path={match.path} component={CollectionsOverview}/>
            <Route exact path={`${match.path}/:collectionId`} component={Collection}/>
        </div>
    )
}

const mapDispatchToProps = {
    updateCollections
}

export default connect(null, mapDispatchToProps)(ShopPage)

  

 

