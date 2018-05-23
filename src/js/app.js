/* 
 *@author Andrew Basore
 * Intent:
 * Main entrypoint for React application. We import React
 * to create a component to render with ReactDOM. This
 * is also the entrypoint for webpack to compile our JS  
*/

import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render(){
        return <h1>Hello World</h1>
    }
}

ReactDOM.render(<Hello/>, document.getElementById('app'));
