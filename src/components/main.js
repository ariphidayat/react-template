import React from 'react';
import LeftSidebar from './left-sidebar';
import MediaContainer from './media-container'
import RightSidebar from './right-sidebar'

const Main = () => (
  <main className="container">
    <div className="row">
      <LeftSidebar/>
      <MediaContainer/>
      <RightSidebar/>
    </div>
  </main>
)

export default Main;
