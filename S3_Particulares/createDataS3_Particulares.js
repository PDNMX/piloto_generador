const mongoose = require('mongoose');
const { Psancionados } = require('./models');
const { url, client_options } = require('./db_conf');
const {
  randomChoice,
  getNamesGender,
  getLastName,
  rfc,
  curp,
  getEntity,
  getTypeSanctions,
  getTypeDocuments,
  getCause,
  getPenaltyFee,
  getTelephone,
  getResponsible,
  getNumExp,
  getAddressmex,
  getFaulttype,
  getNumbers,
  getCountries,
  getAuthority,
  getDates,
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
   const addressmexico = getAddressmex();
   const address = getCountries();

    data.push({
       fechaCaptura: new Date().toISOString(),
       expediente:getNumExp(),
       nombres: ng.name,
       primerApellido: getLastName(),
       segundoApellido: getLastName(),
       institucionDependencia: getEntity(),
       particularSancionado:{
         nombres:ng.name,
         primerApellido: getLastName(),
         segundoApellido: getLastName(),
        nombreRazonSocial:ng.name,
        objetoSocial:ng.socialObject,
        rfc: ' ',
        tipoPersona:ng.typePerson,
        telefono:getTelephone(),

       domicilioMexico:{
           pais:addressmexico.country,
           entidadFederativa:addressmexico.state,
           municipio:addressmexico.city,
           codigoPostal:address.code,
           localidad:addressmexico.localidad,
           vialidad:addressmexico.vialidad,
           numeroExterior:getNumbers(),
           numeroInterior:getNumbers()
       },
       domicilioExtranjero:{
         pais:address.country,
         calle:address.streetext,
         ciudadLocalidad:address.city,
         estadoProvincia:address.province,
         codigoPostal:address.code,
         numeroExterior:getNumbers(),
         numeroInterior:getNumbers()
       }
       },
       directorGeneral:{
        nombres:getResponsible(),
        primerApellido:getLastName(),
        segundoApellido:getLastName(),
       curp: ''
       },
       apoderadoLegal:{
       nombres:getResponsible(),
       primerApellido:getLastName(),
       segundoApellido:getLastName(),
       curp: ''
       },
       objetoContrato:' ',
       autoridadSancionadora:getAuthority(),
       tipoFalta: getFaulttype(),
       tipoSancion:[getTypeSanctions()],
       causaMotivoHechos:getCause(),
       acto: ' ',
       responsableSancion:{
       nombres:getResponsible(),
       primerApellido:getLastName(),
       segundoApellido:getLastName(),
       curp: ''
       },
       resolucion:
       {
        sentido: 'Sancionatoria con multa',
        url: ' ',
        fechaNotificacion:getDates()
       },
       documentos:[getTypeDocuments()],
       multa:getPenaltyFee(),
       observaciones: ' '

   });
}

data = data.map((d) => {
	   d.rfc = rfc(d);
	   d.curp = curp(d);
	  //  console.log("insertando RFC " + d.rfc + "CURP: " + d.curp);
	   d.directorGeneral.curp = curp(d.directorGeneral);
	   d.apoderadoLegal.curp = curp(d.apoderadoLegal);
	   d.responsableSancion.curp = curp(d.responsableSancion);
       d.particularSancionado.rfc = rfc(d.particularSancionado);
  // d.curp = curp(d);
   return d;
});

Psancionados.insertMany(data)
   .then((d) => {
      // console.log(d);
       mongoose.disconnect();
   })
   .catch((error) => {
       console.log(error.message);
       mongoose.disconnect();
   });
