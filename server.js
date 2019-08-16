'use strict'

const express = require('express') // require is the way we take our libraries that we have in our package and bring them into our server. Express is our library. We are building an Express Server. 
// http://expressjs.com/en/api#app

const app = express();
// need to install express - npm install express. It gives us dependencies in a package-lock.json

// tell the server to serve the public files
app.use(express.static('./public'));

app.get('/hello', (request, response) => {
    response.status(200).send('Hello');
}) // app.get is a fancy event listener that is waiting for someone to go to /hello. That's the request. The response is a status 200, or all is well.

app.get('/data', (request, response) => {
    let airplanes = {
        departure: Date.now(),
        canFly: true,
        pilot: 'Well trained'
    }

    response.status(200).json(airplanes);
})

app.get('/', (request, response) => {
    response.status(200).redirect('index.html');
}) // star means it all the paths, in this case. These are asynchronous functions, because they're waiting for things to happen. These are also callback functions, as in when a person arrives, do something.

app.use('*', (request,response) => {
    response.send('Sorry, that route does not exist');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));