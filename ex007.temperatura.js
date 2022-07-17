var input = require('readline-sync');
console.log('TEMPERATURA EM CELCIUS');
const fahrenheit = Number(input.question('Digite a temperatura em Fahrenheit: '));
console.log(`A temperatura em graus celcius é ${((fahrenheit - 32) / 1.8).toFixed(2)}º`);