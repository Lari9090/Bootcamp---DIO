const peso = 54;
const altura= 1.76;
const imc = peso / Math.pow(altura, 2);
console.log('Seu IMC é ', imc.toFixed(2));

if (imc < 18.5){
    console.log('Voce esta abaixo do peso ideal');
} else if (imc>=18.5 && imc < 25){
    console.log('Voce esta no peso ideal');
} else if (imc>=25 && imc < 30){
    console.log('Voce esta acima do peso ideal');
} else if (imc>=30 && imc < 40){
    console.log('Voce esta obeso');
} else{
    console.log('Obesidade grave');
}