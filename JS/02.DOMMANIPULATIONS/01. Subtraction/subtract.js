function main() {
    const inputs = document.getElementById('wrapper');
    const firstNumverInput = document.getElementById('firstNumber');
    const secondNumberInput = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');
    let resultValue;

    if(inputs === null || firstNumverInput === null || secondNumberInput === null){
        throw new Error('DOM element missing');
    }

    enableInput(firstNumverInput);
    enableInput(secondNumberInput);

    resultValue = subtractResult(firstNumverInput.value, secondNumberInput.value);
    printResult(resultElement, resultValue);

    inputs.addEventListener('change', () => {
        resultValue = subtractResult(firstNumverInput.value, secondNumberInput.value);
        printResult(resultElement, resultValue);
    });
    
    
}

function enableInput(inputElement){
    inputElement.removeAttribute('disabled');
}

function subtractResult(firstNumberString, secondNumberString){
    return Number(firstNumberString) - Number(secondNumberString);
}

function printResult(resultElement, resultValue){
    resultElement.innerHTML = resultValue;
}

