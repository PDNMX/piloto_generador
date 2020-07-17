const mongoose = require('mongoose');
const { Spic } = require('./models');
const { url, client_options } = require('./db_conf');
const {
   randomChoice,
   getNamesGender,
   getPosition,
   getLastName,
   rfc,
   curp,
   getEntity,
   getTypeSanctions,
   getTypeDocuments,
   getCause,
   getPenaltyFee,
   getAddress,
   getTelephone,
   getResponsible,
   getNumExp
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
let data = [];



for (let i = 0; i < nrows; i++) {
   const ng = getNamesGender();
  // const ngResponsable = getNamesGender();
   
    data.push({
       fechaCaptura: new Date().toISOString(),
       numeroExpediente:getNumExp(),
       nombreRazonSocial:ng.name,
       rfc: '',
       //curp: '',
       tipoPersona:ng.typePerson,
       telefono:getTelephone(),
       domicilio:getAddress(),
       tipoSancion:getTypeSanctions(),
       institucionDependencia: getEntity(),
       nombres:ng.name,
       primerApellido: getLastName(),
       segundoApellido: getLastName(),
       causaMotivosHechos:getCause(),
       autoridadSancionadora: getEntity(),
       responsable:{
       nombres:getResponsible(),
       primerApellido:getLastName(),
       segundoApellido:getLastName()
       },
       tipoDocumento:getTypeDocuments(),
       fechaNotificacion:new Date().toISOString(),
       multa:getPenaltyFee()
   });
}

data = data.map((d) => {
	   d.rfc = rfc(d);
 //  d.curp = curp(d);
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
