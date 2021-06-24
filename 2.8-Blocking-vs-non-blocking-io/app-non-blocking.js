const { getUsuario } = require('./services/usuarios')

console.log('start!')
console.time('t1')

getUsuario(1, (usuario) => {
    console.log('usuario 1: ', usuario) 
})

getUsuario(2, (usuario) => {
    console.log('usuario 2: ', usuario)
    console.timeEnd('t1')
})

console.log('end!')