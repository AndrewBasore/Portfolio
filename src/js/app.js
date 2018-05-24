/* 
 *@author Andrew Basore
 * Intent:
 * Main entrypoint for React application. We import React
 * to create a component to render with ReactDOM. This
 * is also the entrypoint for webpack to compile our JS  
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Portfolio from './components/Portfolio.js';
import Sidebar from './components/Sidebar.js';
import Home from './components/Home.js';

import css from "../css/main.scss";


//Layout class is a component that governs the layout of our webapp
class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <main>
                <Sidebar />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/portfolio' component={Portfolio}/>
                </Switch>
            </main>
        )
    }
}

ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
   
), document.getElementById('app'));
