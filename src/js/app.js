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

import css from "../css/main.scss";


ReactDOM.render((
    <div>
        <div className="sidebar">
            <div class="logo">Awesome<span>Portfolio</span></div>
            <nav>
                <a href="" class="nav-item">Home</a>
                <a href="" class="nav-item">About</a>
                <a href="" class="nav-item active">Portfolio</a>
                <a href="" class="nav-item">Contact</a>
            </nav>
        </div>
        
        <Portfolio/>
    </div>
), document.getElementById('app'));
