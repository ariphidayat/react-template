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
  <div className="row">
    <LeftSidebar/>
    <Switch>
      <Route path={`${match.url}/timeline`} component={Timeline}/>
      <Route path={`${match.url}/people`} component={People}/>
      <Route path={`${match.url}/inbox`} component={Inbox}/>
      <Route path={`${match.url}/trending`} component={Trending}/>
      <Redirect exact path={match.url} to={`${match.url}/timeline`}/>
      <Route component={NotFound}/>
    </Switch>
    <RightSidebar/>
  </div>
)


export default Content
