import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

import 'bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './components/App'

render((
  <Router>
    <App/>
  </Router>
), document.getElementById('root'));
