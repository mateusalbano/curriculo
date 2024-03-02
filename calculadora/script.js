var display = null;
console.log(display);
var valor1 = 0;
var valor2 = 0;
var isValor2 = false;
var decimal = false;
var operacao = '';

function soma() {
    valor1 = valor1 + valor2
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = false;
}

function subtracao() {
    valor1 = valor1 - valor2;
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = false;
}

function divisao() {
    valor1 = valor1 / valor2;
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = false;
}

function multiplicacao() {
    valor1 = valor1 * valor2;
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = false;
}

function modulo() {
    valor1 = valor1 % valor2;
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = false;
}

function raiz() {
    valor1 = Math.sqrt(valor1);
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = false;
}

function tecla(tecla) {
    display = document.getElementById("display");
    switch (tecla) {

        case 'módulo':
            isValor2 = true;
            operacao = 'módulo'
            decimal = false;
            break;
        case 'raiz':
            isValor2 = false;
            raiz();
            break;
        case 'C':
            valor1 = 0;
            valor2 = 0;
            isValor2 = false;
            decimal = false;
            valor2 = 0;
            display.innerHTML = valor1;
            break;
        case 'div':
            isValor2 = true;
            decimal = false;
            display.innerHTML = 0;
            valor2 = 0;
            operacao = 'div';
            break;
        case 'mul':
            isValor2 = true;
            decimal = false;
            display.innerHTML = 0;
            valor2 = 0;
            operacao = 'mul';
            break;
        case 'soma':
            isValor2 = true;
            decimal = false;
            display.innerHTML = 0;
            valor2 = 0;
            operacao = 'soma';
            break;
        case 'sub':
            isValor2 = true;
            decimal = false;
            display.innerHTML = 0;
            valor2 = 0;
            operacao = 'sub';
            break;
        case 'inverte':
            if (isValor2) {
                valor2 = - valor2;
                display.innerHTML = valor2;
            } else {
                valor1 = - valor1;
                display.innerHTML = valor1;
            }
            break;
        case 'decimal':
            if (!decimal) {
                decimal = true;
                display.innerHTML = display.innerHTML + '.';
            }
            break;
        case 'igual':
            switch (operacao) {
                case 'módulo':
                    modulo();
                    break;
                case 'div':
                    divisao();
                    break;
                case 'mul':
                    multiplicacao();
                    break;
                case 'soma':
                    soma();
                    break;
                case 'sub':
                    subtracao();
                    break;
            }
            break;
        default:
            if (display.innerHTML.length >= 15) {
                break;
            }
            if (!isValor2) {
                valor1 = Number(display.innerHTML + tecla);
                display.innerHTML = valor1;
            } else {
                valor2 = Number(display.innerHTML + tecla);
                display.innerHTML = valor2;
            }
            
            break;
    }
}