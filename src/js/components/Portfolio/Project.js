import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        let project = this.props.project;
        
    return (
      
    <div class="cube-container">
        <div class="photo-cube">
            <img class="front" src={project.backgroundImage} alt=""/>
            <div class="back photo-desc">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
                <a href="#" class="button">website</a>
                <a href="#" class="button">code</a>
            </div>
            <img class="left" src="img/photos/2.jpg" alt=""/>
            <img class="right" src="img/photos/3.jpg" alt=""/>
        </div>
    </div>	
      
    )
  }
}
