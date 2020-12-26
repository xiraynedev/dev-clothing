import { createSelector } from "reselect";
import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP = {
    hats: 1,
    jackets: 2,
    sneakers: 3,
    mens: 4,
    womens: 5
}
const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollection = memoize(collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
        )
    )
)