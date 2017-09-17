import React from 'react'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'

const Content = (props) => (
  <div className="row">
    <LeftSidebar/>
      {props.children}
    <RightSidebar/>
  </div>
)


export default Content
