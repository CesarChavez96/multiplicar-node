const colors = require('colors/safe');

const argv = require('./config/yargs').argv;

const { crearArchivo, crearLista } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        crearLista(argv.base, argv.limite)
            .then(archivo =>
                console.log(archivo))
            .catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo =>
                console.log('Archivo creado', colors.green(`${archivo}`)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}


//console.log(argv);
//let base = '5';
//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];
/*
 */