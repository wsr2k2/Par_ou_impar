n1 = parseInt(prompt('Digite um numero: '));
if (n1 % 2 === 0){
 res = 'PAR'
 console.log(`Você digitou o numero ${n1} e esse numero é: ${res}!`);
} else if (n1 % 2 === 1){
  res = 'ÍMPAR'
  console.log(`Você digitou o numero ${n1} e esse numero é: ${res}!`);
} else {
  console.log('Você digitou uma opção invalida! Tente novamente!')
};
