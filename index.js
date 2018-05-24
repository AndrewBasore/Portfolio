const express = require('express');
const app = express();
const path = require('path')


const port = 3000;

app.use('/dist', express.static(path.resolve(path.join(__dirname, 'dist'))));

 // Send index.html for anything else.
app.get('/', (_, res) => {
    console.log("Im about to attempt to serve HTML");
    res.sendFile(path.resolve(__dirname,'index.html'))
  }
)

app.listen(port, () => console.log("listening on port ", port))