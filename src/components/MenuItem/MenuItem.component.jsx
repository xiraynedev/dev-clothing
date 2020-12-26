import React from 'react'
import './MenuItem.styles.scss'
import {withRouter} from 'react-router-dom'

const MenuItem = ({title, imageUrl, size, history, match, linkUrl}) => {

    return (
        <div className={`${size} menu-item`} onClick={() =>
            history.push(`${match.path}${linkUrl}`) }>
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
}

export default withRouter(MenuItem)
