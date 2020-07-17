const mongoose = require('mongoose');
const { Spic } = require('./models');
const { url, client_options } = require('./db_conf');
const {
   getNamesGender,
   getLastName,
   rfc,
   curp,
   getEntity,
   getNumExp,
   getTypeSanctions,
   getPenaltyFee,
   getTypePenalty,
   getPosition
} = require('./sample_data');

let nrows = process.argv[2];
 
if (typeof nrows === 'undefined' || isNaN(nrows) || nrows < 1) {
   nrows = 200; //default
}

console.log('nrows -> ', nrows);
mongoose.connect(url, client_options);
//Get the default connection
var db = mongoose.connection;
console.log("Saving Data...");

var db = mongoose.connection;
console.log("Connected to MongoDB");
let data = [];



for (let i = 0; i < nrows; i++) {
   const ng = getNamesGender();

   
    data.push({
       rfc: '',
      // curp: '',
       nombres: ng.name,
       primerApellido: getLastName(),
       segundoApellido: getLastName(),
       genero: ng.gender,
       institucionDependencia: getEntity(),
       puesto: getPosition(),
       tipoSancion: [ getTypeSanctions() ],
       tipoFalta: [ getTypePenalty() ],
       autoridadSancionadora: getEntity(),
       multa:getPenaltyFee(),
       numeroExpediente:getNumExp(),
       puesto: getPosition()
   });
}

data = data.map((d) => {
	   d.rfc = rfc(d);
   return d;
});

Spic.insertMany(data)
   .then((d) => {
       console.log(d);
       mongoose.disconnect();
   })
   .catch((error) => {
       console.log(error);
       mongoose.disconnect();
   });
