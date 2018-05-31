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
      
        <div  className={`portfolio-item medium`} style={style}>
            <div className='links'></div>
            <div className='lay-over' >
                <h3>{project.name}</h3>
            </div>
        </div>
      
    )
  }
}
