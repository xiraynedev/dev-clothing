import React from 'react'
import DirectoryMenu from '../DirectoryMenu/DirectoryMenu.component'
import styled from 'styled-components'

const HomepageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Homepage = () => {
    return (
        <HomepageContainer className='homepage'>
            <DirectoryMenu/>
        </HomepageContainer>
    )
}
  


