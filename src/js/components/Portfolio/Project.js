import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        let project = this.props.project;
        let style = {
            backgroundImage: project.backgroundImage
        }
    return (
      
        <div>
            <p><strong>{project.name}</strong></p>
            <div className={`portfolio-item medium`} style={style}></div>
            
        </div>
      
    )
  }
}
