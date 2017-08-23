import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './css/main.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import Header from './components/header';
import LeftSidebar from './components/left-sidebar';
import MediaContainer from './components/media-container'
import RightSidebar from './components/right-sidebar'
import Footer from './components/footer'

export default class App extends Component {
    render() {
        return (
          <div>
            <Header/>
            <main className="container">
              <div className="row">
                <LeftSidebar/>
                <MediaContainer/>
                <RightSidebar/>
              </div>
            </main>
            <Footer/>
          </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
