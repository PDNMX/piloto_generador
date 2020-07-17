const names = [
   {
       name: 'Alejandra',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Abetu',
       gender: { clave: 'M', valor: 'MASCULINO' }
   },
   {
       name: 'Alan',
       gender: { clave: 'M', valor: 'MASCULINO' }
   },
   {
       name: 'Masamayeto',
       gender: { clave: 'M', valor: 'MASCULINO' }
   },
   {
       name: 'Crara',
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
       name: 'Ata',
       gender: { clave: 'F', valor: 'FEMENINO' }
   },
   {
       name: 'Hernan',
       gender: { clave: 'O', valor: 'OTRO' }
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
{ clave: "NAD", valor: "NEGLIGENCIA ADMINISTRATIVA" },
  { clave: "VPC", valor: "VIOLACION PROCEDIMIENTOS DE CONTRATACION" },
  { clave: "VLNP", valor: "VIOLACION LEYES Y NORMATIVIDAD PRESUPUESTAL" },
  { clave: "AUT", valor: "ABUSO DE AUTORIDAD" },
  { clave: "CEX", valor: "COHECHO O EXTORSION" },
  { clave: "IDSP", valor: "INCUMPLIMIENTO EN DECLARACION DE SITUACION PATRIMONIAL"},
  { clave: "DCSP", valor: "DELITO COMETIDO POR SERVIDORES PUBLICOS" },
  { clave: "EIFM", valor: "EJERCICIO INDEBIDO DE SUS FUNCIONES EN MATERIA MIGRATORIA"},
  { clave: "VDH", valor: "VIOLACIÓN A LOS DERECHOS HUMANOS" },
  { clave: "AG", valor: "ADMINISTRATIVA GRAVE" },
  { clave: "ANG", valor: "ADMINISTRATIVA NO GRAVE" },
  { clave: "AC", valor: "ACTO DE CORRUPCIÓN" },
  { clave: "OTRO", valor: "OTRO" }
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
       valor: 'SUSPENSION DE EMPLEO, CARGO O COMISION'
   },
   {
       clave: 'D',
       valor: 'DESTITUCION DEL EMPLEO CARGO O COMISION'
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
const getPenaltyFee = () => randomChoice(penalty_fee);
const getTypePenalty = () => randomChoice(typePenalty);
const getPosition = () => randomChoice(positions);

module.exports = {
   randomChoice,
   getNamesGender,
   getLastName,
   rfc,
   curp,
   getEntity,
   getNumExp,
   getTypeSanctions,
   getPenaltyFee,
   getTypePenalty,
   getPosition
};




