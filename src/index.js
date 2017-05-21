import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom'
import RoutesCom from './config/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render(
  <MuiThemeProvider>
    <RoutesCom/>
  </MuiThemeProvider>,
  document.getElementById('app'));
