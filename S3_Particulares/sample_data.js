const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};


const names = [
   {
       name: 'Alejandra Alvarado Castro',
       typePerson:'F',
       socialObject:'Objeto social'
   },

   {
       name: 'Alan Alfonso Prado Infante',
       typePerson:'F',
       socialObject:'Objeto social'
   },
   {
       name: 'Francisco Javier Sanchez Mariscal',
       typePerson:'F',
       socialObject:'Objeto social'
   },
   {
       name: 'Clara Monsivais Estrada',
       typePerson:'F',
       socialObject:'Objeto social'
   },
   {
       name: 'Andrea Fernández Solis',
       typePerson:'F',
       socialObject:'Objeto social'
   },
   {
       name: 'Gaia Ortiz Carranza',
       typePerson:'F',
       socialObject:'Objeto social'
   },
   {
       name: 'Tamara Alemán Castillo',
       typePerson:'F',
       socialObject:'Objeto social'
   },

   {
      name: 'SISCOMSAT S. DE R.L. DE C.V.',
      typePerson:'M',
      socialObject:'PROMOCION INMOBILARIA'
   },

   {
      name: 'CONSTRUCCIÓN ESPECIALIZADA Y TECNOLÓGICA DE MÉXICO, S.A. DE C.V.',
      typePerson:'M',
      socialObject:'CONSTRUCCION'
   },
   {
       name: 'AZTEC MEDICA, S.A. DE C.V',
       typePerson:'M',
       socialObject:'SERVICIOS DE SALUD'
    }
];

const last_names = [
   'Martinez',
   'Cuevas',
   'Gallegos',
   'Morales',
   'García',
   'Valdes',
   'Juarez',
   'Flores',
   'Villarreal',
   'Rodriguez',
   'Rivera'
];

const responsible = [
   'Hernán',
   'Michelle',
   'Ilse',
   'Noemí',
   'Giovanni',
   'Patricia',
   'Norma',
   'Maya',
   'Jazmín',
   'Saúl',
   'Crisostomo'
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

const typeSanction = [
   {
       clave: 'I',
       valor: 'INHABILITADO',
       descripcion: 'INHABILITADO'
   },
   {
       clave: 'M',
       valor: 'MULTADO',
       descripcion:'MULTADO'
   },
    {
       clave: 'S',
       valor: 'SUSPENSIÓN DE ACTIVIDADES',
       descripcion: 'SUSPENSIÓN DE ACTIVIDADES'
   },
   {
        clave: 'D',
        valor: 'DISOLUCIÓN DE LA SOCIEDAD',
        descripcion: 'DISOLUCIÓN DE LA SOCIEDAD'
   },
   {
       clave: 'A',
       valor: 'AMONESTACIÓN',
       descripcion: 'AMONESTACIÓN'
   },
   {
       clave: 'IND',
       valor: 'INDEMNIZACIÓN POR LOS DAÑOS Y PERJUICIOS OCASIONADOS A LA HACIENDA PÚBLICA FEDERAL, LOCAL O MUNICIPAL, O AL PATRIMONIO DE LOS ENTES PÚBLICOS',
       descripcion :'INDEMNIZACIÓN'
   },
   {
       clave: 'SE',
       valor: 'SANCIÓN ECONÓMICA',
       descripcion: 'SANCIÓN ECONÓMICA'
   },
   {
       clave: 'O',
       valor: 'OTRO',
       descripcion : 'OTRO'
   },
];

const typeDocument = [
  {
   tipo: 'RESOLUCION',
   id:'7D898J6',
   titulo:'RESOLUCION',
   descripcion:'Este es un documento',
   url:'http://archivo.com/midoc1.pdf',
   fecha: '2020-02-09'
  },
  {
   tipo: 'CONSTANCIA_SANCION',
   id:'35SH512',
   titulo:'CONSTANCIA_SANCION',
   descripcion:'Este es un documento',
   url:'http://archivo.com/midoc2.pdf',
      fecha: '2010-04-02'
  },
  {
   tipo: 'CONSTANCIA_INHABILITACION',
   id:'841SG8',
   titulo:'CONSTANCIA_INHABILITACION',
   descripcion:'Este es un documento',
   url:'http://archivo.com/midoc3.pdf',
      fecha: '2018-07-15'
  },
  {
   tipo: 'CONSTANCIA_ABSTENCION',
   id:'1887AL',
   titulo:'CONSTANCIA_ABSTENCION',
   descripcion:'Este es un documento',
   url:'http://archivo.com/midoc4.pdf',
      fecha: '2020-03-02'
  }
  ];

const causes = [
  'NO FORMALIZACION DE CONTRATO',
  'LA EMPRESA PROPORCIONÓ INFORMACIÓN NO VERAZ',
  'NO ENTREGAR LA OBRA EN LA FECHA COMPROMETIDA',
  'NO HABER EXHIBIDO LA GARANTÍA DE CUMPLIMIENTO DENTRO DEL PLAZO ESTABLECIDO EN LA CONVOCATORIA DE CONFORMIDAD CON LO DISPUESTO EN LOS ARTÍCULOS 48 Y 49 DE LA LEY DE ADQUISICIONES, ARRENDAMIENTOS Y SERVICIOS DEL SECTOR PÚBLICO, POR LO QUE SE RECINDIÓ EL CONTRATO'
];

const faulttype = [
  'Soborno',
  'Participacion ilícita',
  'Colusión',
  'Tráfico de influencias'
];

const countries = [
   { country: {valor:'COSTA RICA', clave: 'CR' },
     streetext:'San Jose', city:'San Jose', province:'picapiedra', code:'05020'},

   { country: {valor:'COLOMBIA', clave: 'CO' },
     streetext:'Cl.18 83-180 (Casa113)', city:'Antioquia', province:'Antioquia', code:'30030'},

  { country: {valor:'COLOMBIA', clave: 'CO' },
       streetext:'Calle 67 No. 15-21', city:'Bogotá', province:'Bogotá', code:'40141'},

  { country: {valor:'ITALIA', clave: 'IT' },
         streetext:'Viale Ippocrate', city:'Salvaterra', province:'Reggio Emilia', code:'33050'},

  { country: {valor:'ITALIA', clave: 'IT' },
           streetext:'Stradone Antonio Provolo', city:'Capitone', province:'Termi', code:'42010'},

  { country: {valor:'NO PROPORCIONADO', clave: ' ' },
             streetext:' ',city:' ', province:' ', code:' '}
];



const addressmex = [

   { country: {valor:'MEXICO', clave: 'MX' },
     state: {valor:'Coahuila de Zaragoza', clave: '05' },
     city: {valor:'Saltillo', clave: '031' },
     localidad: {valor:'Granja Adelita', clave: '94' },
     vialidad: {valor:'Efesto', clave: '056' }
    },

     { country: {valor:'MEXICO', clave: 'MX' },
          state: {valor:'Hidalgo', clave: '13' },
          city: {valor:'Tepeapulco', clave: '061' },
          localidad: {valor:'Irolo', clave: '7' },
          vialidad: {valor:' ', clave: ' ' }
          }

];

const numbers = [
'454',
'34',
'29C',
'20',
'12',
'109A',
'42',
'824',
'12B',
'29C',
'203',
'1782',
'1239A',
'138'
];


const penalty_fee = [
   { monto:23596.30, moneda:{clave:'USD',valor:'Dolar estadounidense'}},
   { monto: 256.60,  moneda:{clave:'USD',valor:'Dolar estadounidense'}},
   { monto: 8945.99, moneda:{clave:'MXN',valor:'Peso mexicano'}},
   { monto: 21577.10, moneda:{clave:'MXN',valor:'Peso mexicano'}}
];

const telephone = [
  '7877825400',
  '5723350233',
  '3764656624',
  '8941015551',
  '8769656004',
  '3764275046',
  '4053232553',
  '3764169080'
];

const numExp = [
  '122/2014A',
  '342/2017ZE',
  '222/2015PW',
  '652/2019CG',
  '230/2002AM',
  '431/2015CG'
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
    '2020-01-08',
    '2019-07-19',
    '2020-02-13',
    '2002-04-02',
    '2020-10-08',
    '2004-08-19',
    '2012-02-13',
    '2015-06-02'
];


const datesIni = [
    '2010-01-08',
    '2019-07-19',
    '2010-02-13',
    '2002-04-02',
    '2010-10-08',
    '2004-08-19',
    '2012-02-13',
    '2015-06-02'
];


const datesFin = [
    '2021-01-08',
    '2022-07-19',
    '2021-02-13',
    '2022-04-02',
    '2021-10-08',
    '2022-08-19',
    '2022-02-13',
    '2023-06-02'
];

const urls = [
  'https://miinstitucion.com/doc1.pdf',
    'https://miinstitucion.com/doc2.pdf',
    'https://miinstitucion.com/documento.pdf',
];


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
   //const sexo = genero.clave === 'F' ? 'M' : 'H';

   let complemento = randomChoice([ 'VZ', 'DF', 'OX' ]) + consonants + getRandomIntInclusive(10, 99);
   let iniciales =
       primerApellido.slice(0, 2).toUpperCase() + segundoApellido[0].toUpperCase() + nombres[0].toUpperCase();

   return `${iniciales}${year}${month}${day}${complemento}`;
};

const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];
const getNamesGender = () => randomChoice(names);
const getLastName = () => randomChoice(last_names);
const getEntity = () => randomChoice(entities);
const getTypeSanctions = () => randomChoice(typeSanction);
const getTypeDocuments = () => randomChoice(typeDocument);
const getCause = () => randomChoice(causes);
const getPenaltyFee = () => randomChoice(penalty_fee);
const getAddress = () => randomChoice(address);
const getTelephone = () => randomChoice(telephone);
const getResponsible = () => randomChoice(responsible);
const getNumExp = () => randomChoice(numExp);
const getCountries = () => randomChoice(countries);
const getAddressmex = () => randomChoice(addressmex);
const getFaulttype = () => randomChoice(faulttype);
const getNumbers = () => randomChoice(numbers);
const getAuthority = () => randomChoice(authority);
const getDates = () => randomChoice(dates);
const getDatesIni = () => randomChoice(datesIni);
const getDatesFin = () => randomChoice(datesFin);
const getURL = () => randomChoice(urls);


module.exports = {
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
   getAuthority,
   getCountries,
   getDates,
    getDatesIni,
    getDatesFin,
    getURL
};




