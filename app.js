// Ejecuctar: node app crear --base=3 --limite=5
// Ejecuctar: node app listar --base=3 --limite=5
const argv = require('./config/yargs').argv;
const colors = require('colors/safe');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);
let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(colors.yellow(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('comando no reconocido');
}

console.log(argv);
console.log(` base: ${argv.base} limite: ${argv.limite}`);

//let parametro = argv[2];
//let base = parametro.split('=')[1];

// console.log(parametro)