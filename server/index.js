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
app.get('/*', (req, res, next) => {

  // //Heroku deployment seems to be seving index.html for javascript links so we have to reject requests for .js files
  // let filesIgnore = ['js']; //Array of file extensions to not send index.html for requests
  // let params = req.params;
  // let isValid = true;  //assume request is valid for index.html

  // filesIgnore.forEach( file => { //check to see if any file extensions are in the params
  //   if(params[0].split('.').indexOf(file) !== -1)  isValid = false;
  // })

  //    //If request is valid for html, send it. otherwise, pass it along to next middleware
  // if(isValid)
  //   res.sendFile(path.resolve(path.join(__dirname, '..', 'index.html')))
  // else
  // res.sendFile(path.resolve(path.join(__dirname, '..', 'dist', 'bundle.js')))
  res.sendFile(path.resolve(path.join(__dirname, '..', 'index.html')));
  }
)

app.listen(port, () => console.log("listening on port ", port))