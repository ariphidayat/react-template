import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Content from './Content'
import Timeline from './Timeline'
import People from './People'
import Inbox from './Inbox'
import Trending from './Trending'
import SignIn from './SignIn'
import Register from './Register'

const Main = () => (
  <main className="container">
    <Switch>
      <Redirect exact path='/' to='/timeline'/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/register' component={Register}/>
      <Content>
        <Route exact path='/timeline' component={Timeline}/>
        <Route path='/people' component={People}/>
        <Route path='/inbox' component={Inbox}/>
        <Route path='/trending' component={Trending}/>
      </Content>
    </Switch>
  </main>
)

export default Main
