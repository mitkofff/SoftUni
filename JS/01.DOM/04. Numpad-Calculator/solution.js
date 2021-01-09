function solve() {
    let keys = document.querySelector('.keys');
    let expressionOutput = document.querySelector('#expressionOutput');
    let result = document.querySelector('#resultOutput');
    let clearBtn = document.querySelector('.clear');
    let operators = ['-', '+', '*', '/'];
    let opperand = 1;
    let leftOperandDot = false;
    let leftOperand = '';
    let rightOperand = '';
    let rightOperandDot = false;
    let operations = {
        '+': (leftOperand, rightOperand) => Number(leftOperand) + Number(rightOperand),
        '-': (leftOperand, rightOperand) => Number(leftOperand) - Number(rightOperand),
        '*': (leftOperand, rightOperand) => Number(leftOperand) * Number(rightOperand),
        '/': (leftOperand, rightOperand) => Number(leftOperand) / Number(rightOperand),
    }

    if(keys === null || expressionOutput === null || clearBtn === null){
        throw new Error('Missing DOM element!');
    }


    clearBtn.addEventListener('click', () => {
        expressionOutput.innerHTML = '';
        result.innerHTML = '';
        opperand = 1;
        leftOperandDot = false;
        leftOperand = '';
        rightOperand = '';
        rightOperandDot = false;
    });
    keys.addEventListener('click', (e) => {
        let inputValue = e.target.value
        if(inputValue.match(/^\d*\.?\d*$/) && opperand === 1){
            if(inputValue === "." && leftOperandDot === false){
                expressionOutput.innerHTML += inputValue;
                leftOperandDot = true;
                leftOperand += inputValue
            }
            else if(inputValue !== ".")
            {
                expressionOutput.innerHTML += inputValue;
                leftOperand += inputValue
            }
        }
        else if(operators.includes(inputValue) && opperand === 1){
            expressionOutput.innerHTML += inputValue;
            operator = inputValue;
            opperand++;
        }
        if(inputValue.match(/^\d*\.?\d*$/) && opperand === 2){
            if(inputValue === "." && rightOperandDot === false){
                expressionOutput.innerHTML += inputValue;
                rightOperandDot = true;
                rightOperand += inputValue
            }
            else if(inputValue !== ".")
            {
                expressionOutput.innerHTML += inputValue;
                rightOperand += inputValue;
            }
        }
        else if(inputValue === '=')
        {
            console.log(leftOperand);
            console.log(rightOperand);
            if(leftOperand === '' || rightOperand === ''){
                result.innerHTML = 'NaN';
            }
            else
            {   
                result.innerHTML = operations[operator](leftOperand, rightOperand);
            }
        }
    });
}
