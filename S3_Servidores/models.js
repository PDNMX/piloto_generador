const { Schema, model } = require('mongoose');

 
let ssancionadosSchema = new Schema({
   fechaCaptura: String,
   expediente: String,
   institucionDependencia: {
             nombre: String,
             clave: String,
             siglas: String
         },
   servidorPublicoSancionado:{
          rfc: String,
          curp: String,
          nombres: String,
          primerApellido: String,
          segundoApellido: String,
          genero: {
                 clave: String,
                 valor: String
             },
         puesto: String,
         nivel: String
   },
   autoridadSancionadora: String,
   tipoFalta: {
            clave: String,
            valor: String,
            descripcion: String
    },
   tipoSancion: { type: [], default: void 0 },
   causaMotivoHechos: String,
   resolucion:{
       url:String,
       fechaResolucion: String
      },
   multa:{
       monto: String,
       moneda: {
           clave:String,
           valor:String
       }
   },
   inhabilitacion:{
          plazo: String,
          fechaInicial:String,
          fechaFinal:String
          },
   documentos: { type: [], default: void 0 },
   observaciones:String
    });
 
let Ssancionados = model('Ssancionados', ssancionadosSchema, 'ssancionados');
 
module.exports = {
   ssancionadosSchema,
   Ssancionados
};
