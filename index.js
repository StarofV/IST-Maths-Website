const connect = require('connect');
const serveStatic = require('serve-static');

connect().use(serveStatic(__dirname)).listen(3000, function(){
    console.log('The web site is been served on http://localhost:3000/index.html');
});

