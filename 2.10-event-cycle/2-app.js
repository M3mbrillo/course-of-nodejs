console.log('start') // 1

setTimeout(() => {
    console.log('first') // 5
}, 3000);


setTimeout(() => {
    console.log('second') // 3
}, 0);


setTimeout(() => {
    console.log('thrid') // 4
}, 0);

console.log('end') // 2