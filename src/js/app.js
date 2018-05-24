/* 
 *@author Andrew Basore
 * Intent:
 * Main entrypoint for React application. We import React
 * to create a component to render with ReactDOM. This
 * is also the entrypoint for webpack to compile our JS  
*/

import React from 'react';
import ReactDOM from 'react-dom';

import Portfolio from './components/Portfolio.js';
import Sidebar from './components/Sidebar.js';

import css from "../css/main.scss";


ReactDOM.render((
    <div>
        <Sidebar />
        <Portfolio/>
    </div>
), document.getElementById('app'));
