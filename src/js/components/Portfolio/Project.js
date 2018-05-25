import React, { Component } from 'react'

export default class Project extends Component {
    constructor(props){
        super(props);
    }
  
    render() {
        let project = this.props.project;
    return (
      
        <div  className={`portfolio-item medium gray`}>{project.name}</div>
      
    )
  }
}
