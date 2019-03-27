var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8080);

console.log('Server started');

import halls from './halls.js';
var halls = require('lodash');

// create arrays of names 
function mapArray(halls) {
    // return from _.map
    return _.map(halls, object => {
      // return from _.omit
      return _.omit(object, ['name']);
    });
  }
  
  var result = mapArray(halls);
  
  console.log(result);

  //different name
  var uniqNames = _.uniq(_.map(halls, 'name'));