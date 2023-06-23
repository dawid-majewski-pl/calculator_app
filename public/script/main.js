const btnAdd = document.querySelector('#btn-add');
const btnSubtract = document.querySelector('#btn-subtract');
const btnMultiply = document.querySelector('#btn-multiply');
const btnExponentiation = document.querySelector('#btn-exponentiation');
const btnDivide = document.querySelector('#btn-divide');
const btnEquals = document.querySelector('#btn-equals');

const btn1 = document.querySelector('#btn-1');
const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');
const btn4 = document.querySelector('#btn-4');
const btn5 = document.querySelector('#btn-5');
const btn6 = document.querySelector('#btn-6');
const btn7 = document.querySelector('#btn-7');
const btn8 = document.querySelector('#btn-8');
const btn9 = document.querySelector('#btn-9');
const btn0 = document.querySelector('#btn-0');
const btn00 = document.querySelector('#btn-00');

const btnDot = document.querySelector('#btn-dot');

const btnDel = document.querySelector('#btn-del');
const btnBs = document.querySelector('#btn-bs');

const result = document.querySelector('#result');
const calculation = document.querySelector('#calculation');

btn1.addEventListener('click', function() {
    calculation.textContent += 1;
});
btn2.addEventListener('click', function() {
    calculation.textContent += 2;
});
btn3.addEventListener('click', function() {
    calculation.textContent += 3;
});
btn4.addEventListener('click', function() {
    calculation.textContent += 4;
});
btn5.addEventListener('click', function() {
    calculation.textContent += 5;
});
btn6.addEventListener('click', function() {
    calculation.textContent += 6;
});
btn7.addEventListener('click', function() {
    calculation.textContent += 7;
});
btn8.addEventListener('click', function() {
    calculation.textContent += 8;
});
btn9.addEventListener('click', function() {
    calculation.textContent += 9;
});
btn0.addEventListener('click', function() {
    calculation.textContent += 0;
});
btn00.addEventListener('click', function() {
    calculation.textContent += "00";
});
btnAdd.addEventListener('click', function() {
    calculation.textContent += '+';
});
btnSubtract.addEventListener('click', function() {
    calculation.textContent += '-';
});
btnMultiply.addEventListener('click', function() {
    calculation.textContent += '*';
});
btnExponentiation.addEventListener('click', function() {
    calculation.textContent += '**';
});
btnDivide.addEventListener('click', function() {
    calculation.textContent += '/';
});
btnDel.addEventListener('click', function() {
    outputResult('','');
});
btnBs.addEventListener('click', function() {
    outputResult(currentResult, calculation.textContent.slice(0, -1));
});
function outputResult(displayResult, text) {
    result.textContent = displayResult;
    calculation.textContent = text;
}

let currentResult

btnEquals.addEventListener('click', function() {
    const evaluation = eval(calculation.innerText);
    const evaluationString = String(evaluation);
    currentResult = evaluationString;
    outputResult(currentResult, calculation.innerText)
    return;
});


