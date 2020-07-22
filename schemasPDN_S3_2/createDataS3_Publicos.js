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
   getTypeDocuments,
   getPenaltyFee,
   getTypePenalty,
   getCauses,
   getPosition,
   getAuthority,
   getDates,
   getInhabilitado

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
   const puesto = getPosition();

   
    data.push({
      fechaCaptura: new Date().toISOString(),
      expediente:getNumExp(),
     // nombres: ng.name,
     // primerApellido: getLastName(),
     // segundoApellido: getLastName(),
      institucionDependencia: getEntity(),
      servidorPublicoSancionado:{
        nombres:ng.name,
        primerApellido: getLastName(),
        segundoApellido: getLastName(),
        rfc: ' ',
        curp: ' ',
        genero: ng.gender,
        puesto: puesto.nombre,
        nivel: puesto.nivel
        },
       autoridadSancionadora:getAuthority(),
       tipoFalta: getTypePenalty(),
       tipoSancion: [ getTypeSanctions() ],
       causaMotivoHechos:getCauses(),
       resolucion:
           {
            url: ' ',
            fechaResolucion:getDates()
           },
       multa:getPenaltyFee(),
       inhabilitacion:getInhabilitado(),
       observaciones: ' ',
        documentos:[getTypeDocuments()]
   });
}

data = data.map((d) => {
	   //d.rfc = rfc(d);
	   //d.curp = curp(d);
	   d.servidorPublicoSancionado.rfc = rfc(d.servidorPublicoSancionado);
	   d.servidorPublicoSancionado.curp = curp(d.servidorPublicoSancionado);
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
