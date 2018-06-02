/* 
 *@author Andrew Basore
 * This is our NodeJS backend server. Here we will build our /api calls that will server
 * relevent and useful information to the client.
*/

const express = require('express');
const app = express();
const path = require('path')

//Listens on port 3000
const port = (process.env.PORT || 3000);


//setup static files to be serves on route '/dist' and '/img'
app.use('/dist', express.static(path.resolve(path.join(__dirname, '..', 'dist'))));
app.use('/img', express.static(path.resolve(path.join(__dirname, '..', 'img'))))


// /projects route sends back JSON of Projects array
app.get('/projects', (req, res) =>{
  var result = require('./utils/projects.js'); //replace with database later
  res.json(result);
})

// Send index.html for anything else.
app.get('/*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, '..', 'dist', 'index.html')))
  }
)

app.listen(port, () => console.log("listening on port ", port))