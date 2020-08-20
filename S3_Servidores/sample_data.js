const names = [
   {
       name: 'Alejandra',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Alberto',
       gender: { clave: 'M', valor: 'MASCULINO' }
   },
   {
       name: 'Giovanni',
       gender: { clave: 'M', valor: 'MASCULINO' }
   },
   {
       name: 'Homero',
       gender: { clave: 'M', valor: 'MASCULINO' }
   },
   {
       name: 'Yazdel',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Andrea',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Gaia',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Tamara',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Hernán',
       gender: { clave: 'O', valor: 'OTRO' }
   }
];


const last_names = [
   'Martínez',
   'Cuevas',
   'Gallegos',
   'Morales',
   'García',
   'Valdéz',
   'Juárez',
   'Flores',
   'Villarreal',
   'Rodriguez',
   'Rivera'
];


const entities = [
   {
       nombre: 'Secretaría de la Función Pública',
       clave: 'SFP',
       siglas: 'SFP'
   },
   {
       nombre: 'Secretaría de Hacienda y Crédito Público',
       clave: 'SHCP',
       siglas: 'SHCP'
   },
   {
       nombre: 'Instituto Federal de Telecomunicaciones',
       clave: 'IFT',
       siglas: 'IFT'
   }
];


const typePenalty = [
{ clave: "NAD", valor: "NEGLIGENCIA ADMINISTRATIVA", descripcion: "NEGLIGENCIA ADMINISTRATIVA" },
  { clave: "VPC", valor: "VIOLACION PROCEDIMIENTOS DE CONTRATACION", descripcion: "VIOLACION PROCEDIMIENTOS DE CONTRATACION" },
  { clave: "VLNP", valor: "VIOLACION LEYES Y NORMATIVIDAD PRESUPUESTAL", descripcion: "COLUSIÓN" },
  { clave: "AUT", valor: "ABUSO DE AUTORIDAD", descripcion: "TRATO HUMILLANTE A UN SUBORDINADO" },
  { clave: "CEX", valor: "COHECHO O EXTORSION", descripcion: "COHECHO O EXTORSION" },
  { clave: "IDSP", valor: "INCUMPLIMIENTO EN DECLARACION DE SITUACION PATRIMONIAL", descripcion: "OCULTAMIENTODE PROPIEDADES"},
  { clave: "DCSP", valor: "DELITO COMETIDO POR SERVIDORES PUBLICOS", descripcion: "ROBO" },
  { clave: "EIFM", valor: "EJERCICIO INDEBIDO DE SUS FUNCIONES EN MATERIA MIGRATORIA", descripcion: "EJERCICIO INDEBIDO DE SUS FUNCIONES EN MATERIA MIGRATORIA"},
  { clave: "VDH", valor: "VIOLACIÓN A LOS DERECHOS HUMANOS", descripcion: "DESALOJO FORZOSO DE PERSONAS DE SUS HOGARES" },
  { clave: "AG", valor: "ADMINISTRATIVA GRAVE", descripcion: "ADMINISTRATIVA GRAVE" },
  { clave: "ANG", valor: "ADMINISTRATIVA NO GRAVE", descripcion: "INCUMPLIMIENTO DE FUNCIONES" },
  { clave: "AC", valor: "ACTO DE CORRUPCIÓN", descripcion: "RECIBIR SOBORNO POR UN TRÁMITE" },
  { clave: "OTRO", valor: "OTRO" , descripcion: "OTRO"},
  { clave: "HSEX", valor: "COMETER O TOLERAR CONDUCTAS DE HOSTIGAMIENTO SEXUAL", descripcion: "COMETER O TOLERAR CONDUCTAS DE HOSTIGAMIENTO SEXUAL"},
  { clave: "ASEX", valor: "COMETER O TOLERAR CONDUCTAS DE ACOSO SEXUAL", descripcion: "COMETER O TOLERAR CONDUCTAS DE ACOSO SEXUAL" },
  { clave: "PEC", valor: "PECULADO", descripcion: "PECULADO" },
  { clave: "DRP", valor: "DESVÍO DE RECURSOS PÚBLICOS", descripcion: "DESVÍO DE RECURSOS PÚBLICOS" },
  { clave: "UII", valor: "UTILIZACIÓN INDEBIDA DE INFORMACIÓN", descripcion: "UTILIZACIÓN INDEBIDA DE INFORMACIÓN" },
  { clave: "AFN", valor: "ABUSO DE FUNCIONES" , descripcion: "ABUSO DE FUNCIONES"},
  { clave: "ABCI", valor: "ACTUACIÓN BAJO CONFLICTO DE INTERÉS", descripcion: "ACTUACIÓN BAJO CONFLICTO DE INTERÉS"},
  { clave: "CIND", valor: "CONTRATACIÓN INDEBIDA", descripcion: "CONTRATACIÓN INDEBIDA" },
  { clave: "EOCI", valor: "ENRIQUECIMIENTO OCULTO U OCULTAMIENTO DE CONFLICTO DE INTERÉS", descripcion: "ENRIQUECIMIENTO OCULTO U OCULTAMIENTO DE CONFLICTO DE INTERÉS" },
  { clave: "TINF", valor: "TRÁFICO DE INFLUENCIAS", descripcion: "TRÁFICO DE INFLUENCIAS" },
  { clave: "ENCB", valor: "ENCUBRIMIENTO", descripcion: "ENCUBRIMIENTO" },
  { clave: "DSCT", valor: "DESACATO" , descripcion: "DESACATO"},
  { clave: "OJUST", valor: "OBSTRUCCIÓN DE LA JUSTICIA" , descripcion: "OBSTRUCCIÓN DE LA JUSTICIA"}
];

const typeSanction = [
   {
       clave: 'I',
       valor: 'INHABILITADO',
       descripcion:''
   },
   {
       clave: 'M',
       valor: 'MULTADO',
       descripcion:''
   },
    {
       clave: 'S',
       valor: 'SUSPENSION DE EMPLEO, CARGO O COMISION',
       descripcion:''
   },
   {
       clave: 'D',
       valor: 'DESTITUCION DEL EMPLEO CARGO O COMISION',
       descripcion:'DESPIDO'
   },
   {
         clave: 'O',
         valor: 'OTRO',
         descripcion:'LEVANTAMIENTO DE ACTA ADMINISTRATIVA'
   },
  {
         clave: 'IRSC',
         valor: 'INDEMNIZACIÓN RESARCITORIA',
         descripcion:''
  },
  {
         clave: 'SE',
         valor: 'SANCIÓN ECONÓMICA',
         descripcion:''
  }
];


const numExp = [
  '122/2014',
  '342/2017',
  '222/2015',
  '652/2019',
  '230/2002',
  '431/2015',
];

const penalty_fee = [
   { monto: '23596.00', moneda:{clave:'USD',valor:'Dolar estadounidense'}},
   { monto: '256.00',  moneda:{clave:'USD',valor:'Dolar estadounidense'}},
   { monto: '8945.00', moneda:{clave:'MXN',valor:'Peso mexicano'}},
   { monto: '21577.00', moneda:{clave:'MXN',valor:'Peso mexicano'}}
];

const positions = [
   {
       nombre: 'Director',
       nivel: 'M32'
   },
   {
       nombre: 'Jefe de departamento',
       nivel: 'O21'
   },
   {
       nombre: 'Titular de Unidad',
       nivel: 'J31'
   },
   {
       nombre: 'Director General',
       nivel: 'K31'
   },
   {
       nombre: 'Subdirector',
       nivel: 'N31'
   },
   {
       nombre: 'Director General Adjunto',
       nivel: 'L31'
   }
];

const authority = [
  'CNDH',
  'PRONIF',
  'DIF',
  'PGR',
  'SHCP',
  'IMSS',
];
const dates = [
  '2020-01-08T10:15:14.824Z',
  '2019-07-19T22:44:00.353Z',
  '2020-02-13T12:19:14.824Z',
  '2002-04-02T20:34:00.353Z',
  '2020-10-08T10:15:14.824Z',
  '2004-08-19T22:44:00.353Z',
  '2012-02-13T12:19:14.824Z',
  '2015-06-02T20:34:00.353Z'
];
const causes = [
  'NO FORMALIZACION DE CONTRATO',
  'LA EMPRESA PROPORCIONÓ INFORMACIÓN NO VERAZ',
  'NO ENTREGAR LA OBRA EN LA FECHA COMPROMETIDA',
  'NO HABER EXHIBIDO LA GARANTÍA DE CUMPLIMIENTO DENTRO DEL PLAZO ESTABLECIDO EN LA CONVOCATORIA DE CONFORMIDAD CON LO DISPUESTO EN LOS ARTÍCULOS 48 Y 49 DE LA LEY DE ADQUISICIONES, ARRENDAMIENTOS Y SERVICIOS DEL SECTOR PÚBLICO, POR LO QUE SE RECINDIÓ EL CONTRATO'
];

const inhabilitado = [
   {
       plazo: '2 años',
       fechaInicial: '2018-01-08T10:15:14.824Z',
       fechaFinal: '2020-01-08T10:15:14.824Z'
   },
   {
       plazo: '1 mes',
       fechaInicial: '2018-01-08T10:15:14.824Z',
       fechaFinal: '2020-02-08T10:15:14.824Z'
   },
   {
      plazo: '4 años',
      fechaInicial: '2016-01-08T10:15:14.824Z',
      fechaFinal: '2020-01-08T10:15:14.824Z'
   },
   {
        plazo: '7 meses',
        fechaInicial: '2017-01-02T10:15:14.824Z',
        fechaFinal: '2017-08-02T10:15:14.824Z'
   }
];

const typeDocument = [
  {
   tipo: 'RESOLUCION',
   id:'7D898J6',
   titulo:'RESOLUCION',
   descripcion:' ',
   url:' ',
   fecha:'2020-04-21T13:13:55.448Z'
  },
  {
   tipo: 'CONSTANCIA_SANCION',
   id:'35SH512',
   titulo:'CONSTANCIA_SANCION',
   descripcion:' ',
   url:' ',
   fecha:'2019-09-21T14:06:55.448Z'
  },
  {
   tipo: 'CONSTANCIA_INHABILITACION',
   id:'841SG8',
   titulo:'CONSTANCIA_INHABILITACION',
   descripcion:' ',
   url:' ',
   fecha:'2020-07-12T17:22:55.448Z'
  },
  {
   tipo: 'CONSTANCIA_ABSTENCION',
   id:'1887AL',
   titulo:'CONSTANCIA_ABSTENCION',
   descripcion:' ',
   url:' ',
   fecha:'2018-02-19T20:10:29.448Z'
  }
  ];


const getRandomIntInclusive = (min, max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const rfc = (person) => {
   const { primerApellido, segundoApellido, nombres } = person;
   let year = getRandomIntInclusive(70, 99);
   let month = getRandomIntInclusive(1, 12);
   let day = getRandomIntInclusive(1, 28);
 
   if (month < 10) {
       month = '0' + month;
   }

   if (day < 10) {
       day = '0' + day;
   }

 let homoclave = randomChoice([ 'A', 'B', 'C', 'D', 'E' ]) + getRandomIntInclusive(10, 99);
   let iniciales =
       primerApellido.slice(0, 2).toUpperCase() + segundoApellido[0].toUpperCase() + nombres[0].toUpperCase();
 
   return `${iniciales}${year}${month}${day}${homoclave}`;
};


const curp = (person) => {
   const { primerApellido, segundoApellido, nombres, genero } = person;
   let year = getRandomIntInclusive(70, 99);
   let month = getRandomIntInclusive(1, 12);
   let day = getRandomIntInclusive(1, 28);
 
   if (month < 10) {
       month = '0' + month;
   }

 if (day < 10) {
	    day = '0' + day;
   }
   
   let consonants1 = primerApellido.toUpperCase();
   let consonants2 = segundoApellido.toUpperCase();
   let consonants3 = nombres.toUpperCase();
   const vowels = [ 'A', 'E', 'I', 'O', 'U' ];
   vowels.forEach((v) => {
       consonants1 = consonants1.replace(v, '');
       consonants2 = consonants2.replace(v, '');
       consonants3 = consonants3.replace(v, '');
   });

 const consonants = consonants1[1] + consonants2[1] + consonants3[1];
   const sexo = genero.clave === 'F' ? 'M' : 'H';
 
   let complemento = sexo + randomChoice([ 'VZ', 'DF', 'OX' ]) + consonants + getRandomIntInclusive(10, 99);
   let iniciales =
       primerApellido.slice(0, 2).toUpperCase() + segundoApellido[0].toUpperCase() + nombres[0].toUpperCase();
 
   return `${iniciales}${year}${month}${day}${complemento}`;
};

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getNamesGender = () => randomChoice(names);
const getLastName = () => randomChoice(last_names);
const getEntity = () => randomChoice(entities);
const getNumExp = () => randomChoice(numExp);
const getTypeSanctions = () => randomChoice(typeSanction);
const getTypeDocuments = () => randomChoice(typeDocument);
const getPenaltyFee = () => randomChoice(penalty_fee);
const getTypePenalty = () => randomChoice(typePenalty);
const getCauses = () => randomChoice(causes);
const getPosition = () => randomChoice(positions);
const getAuthority = () => randomChoice(authority);
const getDates = () => randomChoice(dates);
const getInhabilitado = () => randomChoice(inhabilitado);

module.exports = {
   randomChoice,
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
};




