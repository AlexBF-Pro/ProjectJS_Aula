var readlineSync = require('readline-sync');
var numero1 = Number (readlineSync.question('Digite um número: '));
var numero2 = Number (readlineSync.question('Digite outro número: '));
console.log(`A media entre ${numero1} e ${numero2} é igual a ${(numero1 + numero2) / 2}`);