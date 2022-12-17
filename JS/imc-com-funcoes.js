
function calcularImc(peso, altura){
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5){
        return 'Voce esta abaixo do peso ideal' ;
    } else if (imc>=18.5 && imc < 25){
        return 'Voce esta no peso ideal';
    } else if (imc>=25 && imc < 30){
        return 'Voce esta acima do peso ideal';
    } else if (imc>=30 && imc < 40){
        return 'Voce esta obeso';
    } else{
        return 'Obesidade grave';
    }
}

const peso = 47;
const altura= 1.59;
const imc = calcularImc(peso, altura);
console.log('Seu IMC é ', imc.toFixed(2));
console.log(classificarImc(imc));
