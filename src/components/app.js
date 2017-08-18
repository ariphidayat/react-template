import React, { Component } from 'react';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import '../../style/stylesheet.css';

export default class App extends Component {
    render() {
        return (
            <div>
            	<h1 className='dark-gray'>Hell<span className="fa fa-globe fa-spin"/> React!</h1>
            	<button className='btn btn-success'>
                <span className="fa fa-thumbs-o-up"/> Like
              </button>
            </div>
        );
    }
}
