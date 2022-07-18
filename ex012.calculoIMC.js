var input = require('readline-sync');
console.log('===================');
console.log('CÁLCULO IMC');
console.log('===================');
const peso = Number(input.question('Digite o seu peso (kg): '));
const altura = Number(input.question('Digite a sua altura (m): '));
console.clear();
console.log('===================');
console.log('CÁLCULO IMC');
console.log('===================');
const IMC = (peso / (altura * altura)).toFixed(2);
console.log(`Seu IMC é igual a ${IMC}`);
if(IMC >= 18.5 && IMC <= 24.9) {
  console.log('Sua classificação é Normal!');
} else if (IMC >= 25 && IMC <= 29.9) {
  console.log('Sua classificação é Sobrepeso!');
} else if (IMC >= 30 && IMC <= 39.9) {
  console.log('Sua classificação é Obesidade!');
} else (IMC >= 40) {
  console.log('Sua classificação é Obesidade Grave!');
}
console.log('===================');