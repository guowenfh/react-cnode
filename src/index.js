import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './config/routes';

// Render the main component into the dom
ReactDOM.render(
    <Router routes={routes} history={browserHistory}>
    </Router>,
     document.getElementById('app'));
