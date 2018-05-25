import React, { Component } from 'react'

export default class Sidebar extends Component {

  handleClick(){
    let firebaseRef = firebase.database().ref();
    firebaseRef.child("text").set("Some Value");
  }

  render() {
    return (
      <div className="home">
        <h1>Welcome!</h1>
        <img src="/dist/img/face-square" alt="Face of Andrew Basore"/>
        <p>Aliquip voluptate voluptate eiusmod fugiat sunt enim pariatur in Lorem consectetur nisi sunt labore. Lorem occaecat magna ea aute consequat nulla veniam ex Lorem sunt nostrud qui. Ea aliquip proident in mollit incididunt non cupidatat ullamco veniam adipisicing. Aute id esse eu dolore laboris esse incididunt quis voluptate. Commodo cupidatat et sit laboris dolore occaecat aliquip velit pariatur dolor ut labore consectetur. Officia voluptate officia eiusmod consectetur cupidatat sint irure cillum ipsum exercitation pariatur tempor deserunt.</p>
        
      </div>
    )
  }
}
