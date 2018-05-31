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
            <div className='links'>
                <a href={project.href}><img  className="icon" src="/img/page-icon.png"/></a>
                <a href={project.href}><img  className="icon" src="/img/code-icon.png"/></a>
            </div>
            <div className='lay-over' >
                <h3>{project.name}</h3>
            </div>
        </div>
      
    )
  }
}
