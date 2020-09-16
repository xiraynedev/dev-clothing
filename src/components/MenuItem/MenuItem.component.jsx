import React from 'react'
import './MenuItem.styles.scss'
import { withRouter } from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} menu-item`}>
    <div 
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}/>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
)

export const MenuItemWithRouter = withRouter(MenuItem)
