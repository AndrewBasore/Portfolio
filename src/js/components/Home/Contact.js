/* 
 *@auther Andrew Basore
 * 
 * Intention of footer is to display social media buttons to Github, LinkedIn and TeamTreehouse
 * as well as E-mail information. Perhaps display resume and make downloadable
 * 
*/

import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="social-media">
          <h4>Social Media</h4>
          <img src="/img/github-icon.png"/>
          <img src="/img/linkedin-icon.png"/>
          <img src="/img/treehouse-icon.png"/>
        </div>
        <div>
          <h4>E-mail: </h4><span>basoreDevelopment@protonmail.com</span>

        </div>
      </div>

    )
  }
}
