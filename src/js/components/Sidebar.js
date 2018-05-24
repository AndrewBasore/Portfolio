/* 
 *@author Andrew Basore
 *
 * intent: Make Navigational component 
 * Sidebar component is major component of the 
 * web app's layout. We use Link from react-router-dom to navigate our app.
*/

import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div class="logo">Awesome<span>Portfolio</span></div>
        <nav>
            <Link to="/" class="nav-item">Home</Link>
            <Link to="/about" class="nav-item">About</Link>
            <Link to="/portfolio" class="nav-item active">Portfolio</Link>
            <Link to="/" class="nav-item">Contact</Link>
        </nav>
      </div>
    )
  }
}
