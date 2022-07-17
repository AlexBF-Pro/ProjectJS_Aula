var input = require('readline-sync');
console.log('SEUS DÓLARES')
const valorEmReal = Number(input.question('Digite o valor em Reais R$ '));
console.log(`Você tem $${(valorEmReal / 5.41).toFixed(2)}`);