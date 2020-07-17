const { Schema, model } = require('mongoose');

 
let spicSchema = new Schema({
   fechaCaptura: String,
   numeroExpediente: String,
   nombreRazonSocial:String,
   rfc: String,
   curp: String,
  // nombres: String,
   telefono: String,
   //primerApellido: String,
   //segundoApellido: String,
   domicilio: String,
   institucionDependencia: {
       nombre: String,
       clave: String,
       siglas: String
   },
   tipoSancion: { type: [], default: void 0 },
   causaMotivosHechos: String,
   autoridadSancionadora: {
    nombre: String,
    clave: String,
    siglas: String
   },
   tipoDocumento:{
      valor: String
      },
   tipoPersona:{
     valor:String
   },
  responsable:{
    nombres:String,
    primerApellido:String,
    segundoApellido:String
   },
   fechaNotificacion: String,
   multa:{
     moneda: String,
     monto: String
   }
});
 
let Spic = model('S3_1_SancionadosParticulares', spicSchema, 'S3_1_SancionadosParticulares');
 
module.exports = {
   spicSchema,
   Spic
};
