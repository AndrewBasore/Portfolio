import React, { Component } from 'react';
import Project from './Project.js';

/* 
 * @author Andrew Basore
 * 
 * Portfolio component is a stateful React Componen that
 * displays visually projects to the user. We will use
 * css-grid to create a responsive layout, with images that
 * highlight and focus on interactions.
*/

import axios from 'axios';



export default class Portfolio extends Component {
    constructor (){
        super();
        this.state = {
            projects: []
        };
    }

    //loads project data via axios request and appends them to state property
    componentDidMount(){
        axios.get('/projects').then( (res) =>{
            this.setState( () => {
                return {projects: res.data.projects};
            })
        })
    }


    
    render() {

        if(this.state.projects.length > 0){
            var projects = this.state.projects;        
            return (
                <div className="main-content">
                    <h1>Portfolio</h1>
                    <div className="portfolio">
                        <a href={projects[0].href}className="portfolio-item medium gray" style={{backgroundImage:projects[0].backgroundImage}}>{projects[0].name}</a>
                        <a href={projects[1].href} className="portfolio-item medium light-back gray" style={{backgroundImage:projects[1].backgroundImage}} >{projects[1].name}</a>
                        <a href={projects[2].href} className="portfolio-item medium  gray" style={{backgroundImage:projects[2].backgroundImage}}>{projects[2].name}</a>
                        <a href={projects[3].href} className="portfolio-item medium  gray" style={{backgroundImage:projects[3].backgroundImage}}>{projects[3].name}</a>
                        <a href={projects[4].href} className="portfolio-item medium  gray" style={{backgroundImage:projects[4].backgroundImage}}>{projects[4].name}</a>
                    </div> 
                </div>
            )
        } else {
            return <div>Error</div>
        }
        
    }
}
