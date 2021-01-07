import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import WithSpinner from "../WithSpinner/WithSpinner.component";
import CollectionsOverview from "./CollectionsOverview.component";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))

export default CollectionsOverviewContainer