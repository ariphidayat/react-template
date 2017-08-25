import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/main.css';

import 'bootstrap';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './components/header';
import LeftSidebar from './components/left-sidebar';
import MediaContainer from './components/media-container'
import RightSidebar from './components/right-sidebar'
import Footer from './components/footer'
import {NoMatch} from './components/no-match'

export default class App extends Component {
    render() {
        return (
          <Router>
            <div>
              <Header/>
              <main className="container">
                <div className="row">
                  <LeftSidebar/>
                  <Switch>
                    <Route exact path="/" component={MediaContainer}/>
                    <Route component={NoMatch}/>
                  </Switch>
                  <RightSidebar/>
                </div>
              </main>
              <Footer/>
            </div>
          </Router>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
