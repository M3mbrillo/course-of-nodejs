const { getUsuarioSync } = require('./services/usuarios')

console.log('start!')
console.time('t1')


const u1 = getUsuarioSync( 1 );
console.log('Usuario 1:', u1 );


const u2 = getUsuarioSync( 2 );
console.log('Usuario 2:', u2 );


console.log('end!')
console.timeEnd('t1')