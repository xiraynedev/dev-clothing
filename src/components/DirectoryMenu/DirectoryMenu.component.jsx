import React from 'react'
import './DirectoryMenu.styles.scss'
import MenuItem from '../MenuItem/MenuItem.component';
import { connect } from 'react-redux'
import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { createStructuredSelector } from "reselect";

const DirectoryMenu = ({sections}) => (
    <div className='directory-menu'>
      {sections.map(({ id, ...sectionProps }) => (
        <MenuItem key={id} {...sectionProps} />
      ))}
    </div>
)
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu)