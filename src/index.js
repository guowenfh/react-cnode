import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import routes from './config/routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(
  <Router routes={ routes } history={ hashHistory }>
  </Router>,
  document.getElementById('app'));
