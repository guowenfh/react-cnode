import React from 'react';
import ReactDOM from 'react-dom';
import RoutesConfig from './config/routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Provider} from 'react-redux';
import store from './redux/stores';
import 'normalize.css/normalize.css';
import 'styles/App.scss';
injectTapEventPlugin();
// Render the main component into the dom
ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <RoutesConfig/>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app'));
