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


   }
   
   
   console.log(halls);

   //nadam se da je to okej 



const server = require('server');

server(ctx => 'Hello world!');