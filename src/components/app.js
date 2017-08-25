import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './header';
import Main from './main';
import Footer from './footer';
import NoMatch from './no-match'

const App = () => (
  <div>
    <Header/>
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route component={NoMatch}/>
    </Switch>
    <Footer/>
  </div>
)

export default App;
