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
      
        <div  className={`portfolio-item medium gray`} style={style}>
            <div className={'over-lay'} >
                {project.name}
            </div>
        </div>
      
    )
  }
}
