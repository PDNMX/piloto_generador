const {Schema, model} = require('mongoose');


let psancionadosSchema = new Schema({
    fechaCaptura: String,
    expediente: String,
    institucionDependencia: {
        nombre: String,
        clave: String,
        siglas: String
    },
    particularSancionado: {
        nombreRazonSocial: String,
        objetoSocial: String,
        rfc: String,
        tipoPersona: String,
        telefono: String,
        domicilioMexico: {
            pais: {
                clave: String,
                valor: String
            },
            entidadFederativa: {
                clave: String,
                valor: String
            },
            municipio: {
                clave: String,
                valor: String
            },
            codigoPostal: String,
            localidad: {
                clave: String,
                valor: String
            },
            vialidad: {
                clave: String,
                valor: String
            },
            numeroExterior: String,
            numeroInterior: String
        },
        domicilioExtranjero: {
            pais: {
                clave: String,
                valor: String
            },
            calle: String,
            ciudadLocalidad: String,
            estadoProvincia: String,
            codigoPostal: String,
            numeroExterior: String,
            numeroInterior: String
        },
        directorGeneral: {
            nombres: String,
            primerApellido: String,
            segundoApellido: String,
            curp: String
        },
        apoderadoLegal: {
            nombres: String,
            primerApellido: String,
            segundoApellido: String,
            curp: String
        }
    },
    objetoContrato: String,
    autoridadSancionadora: String,
    tipoFalta: String,
    tipoSancion: {type: [], default: void 0},
    causaMotivoHechos: String,
    acto: String,
    responsableSancion: {
        nombres: String,
        primerApellido: String,
        segundoApellido: String
    },
    resolucion: {
        sentido: String,
        url: String,
        fechaNotificacion: String
    },
    multa: {
        monto: Number,
        moneda: {
            clave: String,
            valor: String
        }
    },
    inhabilitacion: {
        plazo: String,
        fechaInicial: String,
        fechaFinal: String
    },
    documentos: {type: [], default: void 0},
    observaciones: String
});

let Psancionados = model('Psancionados', psancionadosSchema, 'psancionados');

module.exports = {
    psancionadosSchema,
    Psancionados
};
