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
                <div className="site">
                    <p>Website</p>
                    <a href={project.href}><img  className="icon site" src="/img/page-icon.png"/></a>
                </div>
                <div className="code">
                    <p>Code</p>
                    <a href={project.href}><img  className="icon code" src="/img/code-icon.png"/></a>
                </div>
                   
                </div>
            <div className='description' >
                <h4>{project.name}</h4>
                <p>{project.description}</p>
            </div>
        </div>
      
    )
  }
}
