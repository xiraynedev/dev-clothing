import React, { useState } from 'react'
import { SHOP_DATA } from '../../shopdata'
import { CollectionPreview } from '../CollectionPreview/CollectionPreview.component'

export const ShopPage = () => {
  const [collections] = useState(SHOP_DATA)

  return (
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
}

  

 

