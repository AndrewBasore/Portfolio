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
            projects: [
                {
                    imgURL: 'https://kek.gg/i/3tq9cr.png',
                    name: 'Tribute',
                    description: 'Tribute Page for Reghar Earthfury, Gladiator of the Nexus',
                    href: 'https://codepen.io/basor1aj/full/bpWpWQ'
                }, {
                    imgURL: 'https://kek.gg/i/4ztwrX.jpg',
                    name: 'E-Commerce',
                    description: 'Mock E-Commerce Page that sells fictional boats',
                    href: 'http://shipping-ships.herokuapp.com/products' 
                }, {
                    imgURL: 'https://kek.gg/i/5tkK6d.png',
                    name: 'Dashboard',
                    description: 'An analysis dashboard that leverages sentiment analysis on several multi-media',
                    href: 'https://sentimentum.herokuapp.com/home'
                }, {
                    imgURL: 'https://kek.gg/i/wjVb9.png',
                    name: 'Wikipedia',
                    description: 'Small viewer for wikipedia searches',
                    href: 'https://codepen.io/AndrewBasore/full/mBjYNg/'
                }, {
                    imgURL: 'https://kek.gg/i/8cgvN.png',
                name: 'Quotes',
                    description: 'Random Quote Generator',
                    href: 'https://codepen.io/AndrewBasore/full/jLjXzw/' 
                }
            ]
        };

    }

    // NYI HTTP Request for Project Data
    // componentDidMount(){
    //     console.log("I mounted!");
    //     axios.get(`thecatapi.com/api/images/get`, (req, res) =>{

    //     })
    //     .catch( err => console.error(err))
    // }
    
    render() {
        var projects = this.state.projects;
        var project1 = projects[0]
        var project2 = projects[1];
        var project3 = projects[2];
        var project4 = projects[3];
        var project5 = projects[4];
        var style1={
            'backgroundImage': `url(${project1.imgURL})`
        }
        var style2={
            'backgroundImage': `url(${project2.imgURL})`
        }
        var style3={
            'backgroundImage': `url(${project3.imgURL})`
        }
        var style4={
            'backgroundImage': `url(${project4.imgURL})`
        }
        var style5={
            'backgroundImage': `url(${project5.imgURL}`
        }
        return (
            <div className="main-content">
                <h1>Portfolio</h1>
                <div className="portfolio">
                    
                    <a href={project1.href}className="portfolio-item medium gray" style={style1}>{project1.name}</a>
                    <a href={project2.href} className="portfolio-item medium light-back gray" style={style2}>{project2.name}</a>
                    <a href={project3.href} className="portfolio-item medium  gray" style={style3}>{project3.name}</a>
                    <a href={project4.href} className="portfolio-item medium  gray" style={style4}>{project4.name}</a>
                    <a href={project5.href} className="portfolio-item medium  gray" style={style5}>{project5.name}</a>
                </div>
            </div>
        )
    }
}
