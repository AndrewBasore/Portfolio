/* 
 *@author Andrew Basore
 * Intent:
 * Main entrypoint for React application. We import React
 * to create a component to render with ReactDOM. This
 * is also the entrypoint for webpack to compile our JS  
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';

import Portfolio from './components/Portfolio';
import Home from './components/Home/';

import css from "../css/main.scss";


//Layout class is a component that governs the layout of our webapp
class Layout extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <header className="mdl-layout__header">
                    <div className="mdl-layout__header-row">
                        <span className="mdl-layout-title">Basore Development</span>
                    <div className="mdl-layout-spacer"></div>
                        <nav className="mdl-navigation mdl-layout--large-screen-only">
                            <Link className="mdl-navigation__link" to="/portfolio">Portfolio</Link>
                            <Link className="mdl-navigation__link" to="/">Home</Link>
                        </nav>
                    </div>
                </header>
                <div className="mdl-layout__drawer">
                    <span className="mdl-layout-title">Popular Links</span>
                    <nav className="mdl-navigation">
                        <Link className="mdl-navigation__link" to="/">Home</Link>
                        <Link className="mdl-navigation__link" to="/portfolio">Portfolio</Link>
                    </nav>
                </div>
                <main className="mdl-layout__content">
                    <div className="page-content">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            <Route path='/portfolio' component={Portfolio}/>
                        </Switch>
                    </div>
                </main>
                <footer>
                    {/* <p>Coded by: Andrew Basore 
                        Social Media:<a href="https://www.linkedin.com/in/andrew-basore-825235116/"><img src="https://kek.gg/i/7vwpT6.png" alt="Linkedin"></a> <span>|</span><span>Email: basoreDev@protonmail.com</span>
                    </p>    */}
                    <p id="author"><span>Coded by: </span>Andrew Basore </p>
                    <p id="social-media"><span>Social Media: </span>
                        <a href="https://www.linkedin.com/in/andrew-basore-825235116/"><img className="icon" src="https://kek.gg/i/7vwpT6.png" alt="Linkedin" /></a>
                        <a href="https://github.com/AndrewBasore"><img className="github icon"src="https://kek.gg/i/7Cb8Rn.png" alt="Linkedin" /></a>
                    </p>
                    <p id="email"><span>Email: </span>basoreDev@protonmail.com</p>
                </footer>
            </div>
        )
    }
}

//Connect Layout with BrowserRouter and render it out to div#app
ReactDOM.render((
    <BrowserRouter>
        <Layout />
    </BrowserRouter>
   
), document.getElementById('app'));
