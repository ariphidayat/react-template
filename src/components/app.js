import React, { Component } from 'react';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/stylesheet.css';

export default class App extends Component {
    render() {
        return (
            <div>
            	<h1 className='dark-gray'>Hello React World!</h1>
            	<button className='btn btn-success'>Yes, I am</button>
            </div>
        );
    }
}
