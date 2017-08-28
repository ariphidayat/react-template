import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Timeline from './Timeline'
import People from './People'
import Inbox from './Inbox'
import Trending from './Trending'
import NotFound from './NotFound'

const Content = ({ match }) => (
  <div>
    <LeftSidebar/>
    <Switch>
      <Route path={`${match.url}/timeline`} component={Timeline}/>
      <Route path={`${match.url}/people`} component={People}/>
      <Route path={`${match.url}/inbox`} component={Inbox}/>
      <Route path={`${match.url}/trending`} component={Trending}/>
      <Route component={NotFound}/>
      <Redirect path={match.url} to={`${match.url}/timeline`}/>
    </Switch>
    <RightSidebar/>
  </div>
)


export default Content
