/* 
 *@author Andrew Basore
 * This is our NodeJS backend server. Here we will build our /api calls that will server
 * relevent and useful information to the client.
*/

const express = require('express');
const app = express();
const path = require('path')

//Listens on port 3000
const port = 3000;


//setup static files to be serves on route '/dist' and '/img'
app.use('/dist', express.static(path.resolve(path.join(__dirname, '..', 'dist'))));
app.use('/img', express.static(path.resolves(path.join(__dirname, '..', 'img'))))

// Send index.html for anything else.
app.get('/*', (_, res) => {
    console.log("Im about to attempt to serve HTML");
    res.sendFile(path.resolve(path.join(__dirname, '..', 'index.html')))
  }
)

app.listen(port, () => console.log("listening on port ", port))