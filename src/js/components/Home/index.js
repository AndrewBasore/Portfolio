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
        <img src="/dist/img/face-square" alt="Face of Andrew Basore"/>
        <p>Highly self-motivated Fullstack developer with a strong analytical mind and a intruigue for exceptional UI design. With an understanding of front end web languages and frameworks including HTML5, CSS, NodeJS/ReactJS and Jquery. Problem solver who thrives in environments with ever changing technical and creative challenges.   In previous roles I have been hands on in design and development on the front end as well as designing server queries and back end architecture. I love working with ReactJS and dynamically driven data.

Please enjoy checking out a few of the projects I have posted below. I am currently located in Tampa Bay Area Florida as a web developer so feel free to reach out through my email listed below! </p>
        
      </div>
    )
  }
}
