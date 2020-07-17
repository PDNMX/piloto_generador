const { Schema, model } = require('mongoose');

 
let spicSchema = new Schema({
  // fechaCaptura: String,
   rfc: String,
   curp: String,
   nombres: String,
   primerApellido: String,
   segundoApellido: String,
   genero: {
       clave: String,
       valor: String
   },
   institucionDependencia: {
       nombre: String,
       clave: String,
       siglas: String
   },
   autoridadSancionadora: {
       nombre: String,
       clave: String,
       siglas: String
      },
   tipoFalta: { type: [], default: void 0 },
   tipoSancion: { type: [], default: void 0 },
   numeroExpediente: String,
   multa:{
        moneda: String,
        monto: String
      },
   puesto:{
        nombre: String,
        nivel: String
      }
});
 
let Spic = model('S3_2_SancionadosServidoresPublicos', spicSchema, 'S3_2_SancionadosServidoresPublicos');
 
module.exports = {
   spicSchema,
   Spic
};
