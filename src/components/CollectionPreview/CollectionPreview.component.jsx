import React from 'react'
import './CollectionPreview.styles.scss'
import { CollectionItem } from '../CollectionItem/CollectionItem.component'

export const CollectionPreview = ({ title, items }) => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {
          items.filter((item, index) => index < 4).map(({ id, ...itemProps }) => {
            return (
              <CollectionItem key={id} {...itemProps}></CollectionItem>
            )
          })
        }
      </div>
    </div>
  )
}
