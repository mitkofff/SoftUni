function solve() {

    let selectMenyTo = document.querySelector('#selectMenuTo');
    let input = document.querySelector('#input');
    let result = document.querySelector('#result')
    let convertBtn = document.querySelector('button');

    if(selectMenyTo === null || input === null
        || result === null || convertBtn === null){
            throw new Error('Missing DOM Element!');
        }
    let optionBinary = document.createElement('option');
    let optionHex = document.createElement('option');
    //selectMenyTo.nextElementSibling.textContent = 'binary';
    optionBinary.textContent = 'Binary';
    optionBinary.value = 'binary';
    optionHex.textContent = 'Hexadecimal';
    optionHex.value = 'hexadecimal';

    selectMenyTo.appendChild(optionBinary);
    selectMenyTo.appendChild(optionHex);

    convertBtn.addEventListener('click', (e) => {
        let inputValue = input.value;
        let resultValue;

        if(selectMenyTo.value === 'binary'){
            resultValue = Number(inputValue).toString(2);
        }
        else if(selectMenyTo.value === 'hexadecimal'){
            resultValue = Number(inputValue).toString(16);
        }
        result.value = resultValue;
        input.value = '';
    })

}
