import React, { Component } from 'react'

export default class Home extends Component {

  handleClick(){
    let firebaseRef = firebase.database().ref();
    firebaseRef.child("text").set("Some Value");
  }

  render() {
    return (
      <div className="home">
        <h1>Andrew Basore</h1>
        <img src="/dist/img/face-square" id="face" alt="Face of Andrew Basore"/>
        {/* <p>Highly self-motivated Fullstack developer with a strong analytical mind and a intruigue for exceptional UI design. With an understanding of front end web languages and frameworks including HTML5, CSS, NodeJS/ReactJS. Problem solver who thrives in environments with ever changing technical challenges.   My previous roles have been hands on in design and development on the front end as well as designing server back end architecture.

Please enjoy a few of the projects I have in the portfolio. Currently located in Florida Tampa Bay Area as a web developer so feel free to reach out through my email listed below! </p> */}
        <p>Welcome to my website! This portfolio of sample projects belongs to a Fullstack Web Developer. Built with popular front-end languages and frameworks like Javascript, React, Webpack, and CSSGrid this expresses the experience required to shine light on any brand on the web! Please feel free to contact me via E-mail or social media below.   </p>
      </div>
    )
  }
}
