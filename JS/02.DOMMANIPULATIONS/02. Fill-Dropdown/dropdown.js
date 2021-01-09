function main() {
    const selectElement = document.getElementById('menu');
    const textInput = document.getElementById('newItemText');
    const valueInput = document.getElementById('newItemValue');
    const addBtn = document.getElementById('addBtn');

    addBtn.addEventListener('click', function (e){
        addOption(selectElement, textInput.value, valueInput.value);
    })

}

document.addEventListener('DOMContentLoaded', main);

function createElement(elementType, content){
    let element = document.createElement(elementType);
    if(typeof content === 'string'){
        element.textContent = content;
        console.log(1)
    }
    return element;
}

function addElementAttribute(element, attribute, value){
    element.setAttribute(attribute, value);
}

function addOption(selectElement, inputText, inputValue){
    let option = createElement('option', inputText);
    addElementAttribute(option, 'value', inputValue);
    selectElement.appendChild(option);
}