var display;
var valor1 = 0;
var valor2 = 0;
var isValor2 = false;
var decimal = false;
var operacao = '';

function displayIgual() {
    display.innerHTML = valor1;
    isValor2 = false;
    decimal = valor1 % 1 != 0;
}

function soma() {
    valor1 = valor1 + valor2
    displayIgual();
}

function subtracao() {
    valor1 = valor1 - valor2;
    displayIgual();
}

function divisao() {
    valor1 = valor1 / valor2;
    displayIgual();
}

function multiplicacao() {
    valor1 = valor1 * valor2;
    displayIgual();
}

function modulo() {
    valor1 = valor1 % valor2;
    displayIgual();
}

function raiz() {
    valor1 = Math.sqrt(valor1);
    displayIgual();
}

function igual(operacao) {
    switch (operacao) {
        case 'modulo':
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
    isValor2 = false;
}

function setOperacao(novaOperacao) {
    if (!isValor2) {
        isValor2 = true
        decimal = false;
        display.innerHTML = 0;
        valor2 = 0;
        this.operacao = novaOperacao;
    }
}

function tecla(tecla) {
    this.display = document.getElementById("display");
    switch (tecla) {
        case 'modulo':
            setOperacao(tecla);
            break;
        case 'raiz':
            if (isValor2) break;
            raiz();
            break;
        case 'C':
            valor1 = 0;
            valor2 = 0;
            isValor2 = false
            decimal = false;
            valor2 = 0;
            display.innerHTML = valor1;
            operacao = "";
            break;
        case 'div':
            setOperacao(tecla);
            break;
        case 'mul':
            setOperacao(tecla);
            break;
        case 'soma':
            setOperacao(tecla);
            break;
        case 'sub':
            setOperacao(tecla);
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
            igual(operacao);
            break;
        default:
            let length = display.innerHTML.length;
            if (decimal) length--;
            if (length >= 15) {
                break;
            }
            if (tecla == 0 && decimal) {
                display.innerHTML = display.innerHTML + 0;
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