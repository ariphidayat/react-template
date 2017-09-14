import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/main.css';

import 'bootstrap';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers)

render((
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>
), document.getElementById('root'));
