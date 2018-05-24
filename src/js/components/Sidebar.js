import React, { Component } from 'react'

export default class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <div class="logo">Awesome<span>Portfolio</span></div>
        <nav>
            <a href="" class="nav-item">Home</a>
            <a href="" class="nav-item">About</a>
            <a href="" class="nav-item active">Portfolio</a>
            <a href="" class="nav-item">Contact</a>
        </nav>
    </div>
    )
  }
}
