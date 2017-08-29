import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Content from './Content'
import SignIn from './SignIn'
import Register from './Register'
import NotFound from './NotFound'

const Main = () => (
  <main className="container">
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/content' component={Content}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/register' component={Register}/>
      <Route component={NotFound}/>
    </Switch>
  </main>
)

export default Main
