import React from "react";
import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import './CollectionsOverview.styles.scss'
import {CollectionPreview} from "../CollectionPreview/CollectionPreview.component";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...collectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...collectionProps} />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)