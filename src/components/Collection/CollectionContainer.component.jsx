import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../WithSpinner/WithSpinner.component";
import Collection from "./Collection.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = connect(mapStateToProps)(WithSpinner(Collection))

export default CollectionContainer