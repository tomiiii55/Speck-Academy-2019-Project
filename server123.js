var vri= newDate ()
var halls = ['dvorana1', 'dvorana2', 'dvorana3', 'dvoran4', 'dvorana5'];
var dvorana1 = {
id:1,
name: 'DvoranaGlavna',
reservation : {
isReserved:new Boolean(true),
reservedFrom:newDate(2019,03,10,10,10),
reservedUntil:newDate(2019,03,11,10,10),
}
}

var dvorana2 = {
    id:2,
    name: 'DvoranaSporedna',
    reservation : {
    isReserved:new Boolean(true),
    reservedFrom:newDate(2019,03,12,10,00),
    reservedUntil:newDate(2019,03,13,10,0),
    }
    }

    var dvorana3 = {
        id:3,
        name: 'DvoranaSkolska',
        reservation : {
        isReserved:new Boolean(false),
        reservedFrom:null,
        reservedUntil:null,
        }
        }

        var dvorana4 = {
            id:4,
            name: 'DvoranaKoncertna',
            reservation : {
            isReserved:new Boolean(false),
            reservedFrom:null,
            reservedUntil:null,
            }
            }

            var dvorana5 = {
                id:5,
                name: 'DvoranaMala',
                reservation : {
                isReserved:new Boolean(false),
                reservedFrom:null,
                reservedUntil:null,
                }
                }


   
   
   
   

   //nadam se da je to okej 



//var server = require('server');

//server(ctx => 'Hello world!');

//const http = require('http');

//const hostname = '127.0.0.1';
//const port = 3015;

//const server = http.createServer((req, res) => {
  ///res.statusCode = 200;
  ///res.setHeader('Content-Type', 'text/plain');
  ///res.end('Hello World\n');
//});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//task 4
halls.push(dvorana1, dvorana2, dvorana3, dvorana4, dvorana5);
var imenaDvorana = [];
imenaDvorana.push(dvorana1.name, dvorana2.name, dvorana3.name, dvorana4.name, dvorana5.name);
console.log(imenaDvorana);

//task 5
var imenaDvoranaString = imenaDvorana.toString();
console.log(imenaDvoranaString);

//task 6
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end(imenaDvoranaString);
}).listen(8080);

console.log('Server started');







//TASK 4
var halls = ['dvorana1', 'dvorana2', 'dvorana3', 'dvoran4', 'dvorana5'];
var dvorana1 = {
id:1,
name: 'DvoranaGlavna',
reservation : {
isReserved:new Boolean(true),
reservedFrom:new Date(2019,03,10,10,10),
reservedUntil:new Date(2019,03,11,10,10),
}
}

var dvorana2 = {
    id:2,
    name: 'DvoranaSporedna',
    reservation : {
    isReserved:new Boolean(true),
    reservedFrom:new Date(2019,03,12,10,00),
    reservedUntil:new Date(2019,03,13,10,0),
    }
    }

    var dvorana3 = {
        id:3,
        name: 'DvoranaSkolska',
        reservation : {
        isReserved:new Boolean(false),
        reservedFrom:null,
        reservedUntil:null,
        }
        }

        var dvorana4 = {
            id:4,
            name: 'DvoranaSporedna',
            reservation : {
            isReserved:new Boolean(false),
            reservedFrom:null,
            reservedUntil:null,
            }
            }

            var dvorana5 = {
                id:5,
                name: 'DvoranaMala',
                reservation : {
                isReserved:new Boolean(false),
                reservedFrom:null,
                reservedUntil:null,
                }
                }


   export {halls};
   
   
   //Server in express

   const express = require('express')
   const app = express()
   const port = 3015;
   
   app.get('/', (req, res) => res.send('Hello World!'))
   
   app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var dvorane = require('./halls.js');

app.get('/halls', function (req, res) {
 res.json('dvorane');
});
   
app.use(express.static('Public'));
//TASK 6
app.post("/hallsCreate", function (req, res) {
  add(req.body.hallName);
  res.redirect("/halls");
});

app.post("/hallsUpdate", function (req, res) {
  add(req.body.hallName);
  res.redirect("/halls");
});

app.post("/hallsDelete", function (req, res) {
  delete(req.body.hallNId);
  res.redirect("/index.html");
});