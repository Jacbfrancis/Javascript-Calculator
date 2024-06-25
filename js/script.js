const calculatorDisplay = document.getElementById('calculator-display');
const answerScreen = document.getElementById('answer-screen');
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[value]');
const clearAll = document.querySelector('[data-clear-all]');
const deleteBtn = document.querySelector('[data-delete]');
const equalsBtn = document.querySelector('[data-equals]');
const changeTheme = document.getElementById('change-theme');

let newInput = [];

numberBtns.forEach(function (numberBtns) {
    numberBtns.addEventListener('click', function () {
        newInput.push(numberBtns.textContent);
        if (newInput[newInput.length - newInput.length] == 0) {
            newInput.pop();
        } else {
            calculatorDisplay.innerText = newInput.join("");
            answerScreen.style.visibility = 'visible';
            answerScreen.textContent = eval(newInput.join(''));
        }
    })
})

operationBtns.forEach(function (operationBtns) {
    operationBtns.addEventListener('click', function () {
        if (newInput.length > 0 || operationBtns.value == "-") {
            if (newInput[newInput.length - 1] == operationBtns.value) {
                newInput.pop();
            }
            newInput.push(operationBtns.value);
            calculatorDisplay.innerText = newInput.join('');
        }
    })
})

deleteBtn.addEventListener('click', function () {
    newInput.pop()
    calculatorDisplay.innerText = newInput.join('')
    answerScreen.textContent = eval(newInput.join(''));
    if (calculatorDisplay.innerText.length < 1) {
        calculatorDisplay.innerText = 0;
        answerScreen.innerText = 0;
        answerScreen.style.visibility = 'hidden';
    }
})

clearAll.addEventListener('click', function () {
    calculatorDisplay.innerText = 0;
    newInput = [];
    answerScreen.style.visibility = 'hidden';
})

equalsBtn.addEventListener('click', function () {
    answerScreen.style.visibility = 'hidden';
    calculatorDisplay.innerText = eval(newInput.join(''));
    newInput = [];
    if (calculatorDisplay.innerText == "undefined") {
        calculatorDisplay.innerText = 0;
    }
})


    const textColor = document.querySelector('body');
    const screenBackground = document.querySelectorAll('section')[0];
    const keypadBackground = document.querySelectorAll('section')[1];

changeTheme.addEventListener('click', function () {
    textColor.classList.toggle('text-white');
    screenBackground.classList.toggle('screenbackground');
    keypadBackground.classList.toggle('keypadbackground');
})