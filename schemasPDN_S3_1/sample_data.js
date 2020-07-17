const names = [
   {
       name: 'Alejandra',
       typePerson:{valor:'FISICA'}
   },

   {
       name: 'Alan',
       typePerson:{valor:'FISICA'}
   },
   {
       name: 'Masamayeto',
       typePerson:{valor:'FISICA'}
   },
   {
       name: 'Crara',
       typePerson:{valor:'FISICA'}

   },
   {
       name: 'Andrea',
       typePerson:{valor:'FISICA'}
   },
   {
       name: 'Gaia',
       typePerson:{valor:'FISICA'}
   },
   {
       name: 'Ata',
       typePerson:{valor:'FISICA'}
   },

   {
      name: 'SISCOMSAT S. DE R.L. DE C.V.',
      typePerson:{valor:'MORAL'}
   },

   {
      name: 'CONSTRUCCIÓN ESPECIALIZADA Y TECNOLÓGICA DE MÉXICO, S.A. DE C.V.',
      typePerson:{valor:'MORAL'}
   },
   {
       name: 'AZTEC MEDICA, S.A. DE C.V',
       typePerson:{valor:'MORAL'}
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
       valor: 'INHABILITADO'
   },
   {
       clave: 'M',
       valor: 'MULTADO'
   },
    {
       clave: 'S',
       valor: 'SUSPENSIÓN DE ACTIVIDADES'
   },
   {
        clave: 'D',
        valor: 'DISOLUCIÓN DE LA SOCIEDAD'
   },
   {
       clave: 'A',
       valor: 'AMONESTACIÓN'
   }
];

const typeDocument = [
  {
   valor: 'RESOLUCION'
  },
  {
   valor: 'CONSTANCIA_SANCION'
  },
  {
   valor: 'CONSTANCIA_INHABILITACION'
  },
  {
   valor: 'CONSTANCIA_ABSTENCION'
  }
  ];



const causes = [
  'NO FORMALIZACION DE CONTRATO',
  'LA EMPRESA PROPORCIONÓ INFORMACIÓN NO VERAZ',
  'NO ENTREGAR LA OBRA EN LA FECHA COMPROMETIDA',
  'NO HABER EXHIBIDO LA GARANTÍA DE CUMPLIMIENTO DENTRO DEL PLAZO ESTABLECIDO EN LA CONVOCATORIA DE CONFORMIDAD CON LO DISPUESTO EN LOS ARTÍCULOS 48 Y 49 DE LA LEY DE ADQUISICIONES, ARRENDAMIENTOS Y SERVICIOS DEL SECTOR PÚBLICO, POR LO QUE SE RECINDIÓ EL CONTRATO'
];

const penalty_fee = [
   { moneda: 'MXN', monto: '23596.00' },
   { moneda: 'USD', monto: '6593.00' },
   { moneda: 'MXN', monto: '86953.00' },
   { moneda: 'MXN', monto: '256.00' },
   { moneda: 'USD', monto: '89554.00' },
   { moneda: 'MXN', monto: '23596.00' },
   { moneda: 'USD', monto: '6593.00' },
   { moneda: 'MXN', monto: '2540.00' },
   { moneda: 'MXN', monto: '12447.00' },
   { moneda: 'USD', monto: '987555.00' }
];

const address = [
  'Mar de Galilea #108 col. Miramar',
  'Cerrada Elitia #140 col. Las Torres',
  'Zamora #330 col. Lomas',
  'Efesto #560 col.Mitología',
  'BLVD. BENITO JUAREZ NO. 1466-A col. FRACC. LOS ANGELES TUXTEPEC	',
  'AV. 5 DE MAYO NO 1100-A col. LOMAS DEL PEDREGAL',
  'CALLE IGNACIO RAYON NO.934 col. 	COL.LAZARO CARDENAS',
  'MATAMOROS NO 85 ESQ. 20 DE NOVIEMBRE col.LOS AMIGOS CHARROS',
  '18 DE MARZO NO. 1111 col. COSTA VERDE',
  'CALLEJON DE LA NOCHE TRISTE NO.23 #140 col. 	LA PIRAGUA',
  'CALLE ALDAMA NO.720 col. FRACC. EL SURESTE',
  'AV INDEPENDENCIA NO. 545-B col.Mitología',
  'CALLE OCAMPO NO.420 col. Lomas',
  'LIBERTAD 56 col. Las Torres',
  'CALLE MORELOS NO. 330 INT.2 col. Lomas',
  '	BULEVAR BENITO JUAREZ ESQUINA I. MATIAS S/N col.Las Torres'
];

const telephone = [
  '8445562323',
  '444-6555',
  '3764 656624',
  '8941015551',
  '3764 837539',
  '3764 275046',
  '8412287445',
  '3764 169080'
];

const numExp = [
  '122/2014',
  '342/2017',
  '222/2015',
  '652/2019',
  '230/2002',
  '431/2015',
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
   getAddress,
   getTelephone,
   getResponsible,
   getNumExp
};




