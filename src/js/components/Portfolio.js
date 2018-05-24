import React, { Component } from 'react'

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

    // NYI HTTP Request for Project Data
    // componentDidMount(){
    //     console.log("I mounted!");
    //     axios.get(`thecatapi.com/api/images/get`, (req, res) =>{

    //     })
    //     .catch( err => console.error(err))
    // }
 
    render() {
        return (
            <div className="main-content">
                <div className="portfolio">
                    <div className="portfolio-item medium">one</div>
                    <div className="portfolio-item large gray">two</div>
                    <div className="portfolio-item medium">three</div>
                    <div className="portfolio-item small">four</div>
                    <div className="portfolio-item tall">five</div>
                    <div className="portfolio-item wide">six</div>
                    <div className="portfolio-item wide">six</div>
                    <div className="portfolio-item medium">one</div>
                </div>
            </div>
        )
    }
}
