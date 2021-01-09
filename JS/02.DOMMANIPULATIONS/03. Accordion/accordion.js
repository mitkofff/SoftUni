document.addEventListener('DOMContentLoaded', main)

function main() {
    const actionBtn = document.querySelector('.button');
    const textBox = document.querySelector('#extra');

    if(actionBtn === null || textBox === null){
        throw new Error('Missing DOM element');
    }
    
    actionBtn.addEventListener('click', function (e) {
        reverseElementVisibility(textBox);
        reverseText(actionBtn, 'More', 'Less');
    });
}

function reverseText(element, firstText, secondText){
    if(element.textContent === firstText){
        element.textContent = secondText;
    }
    else{
        element.textContent = firstText;
    }
}

function reverseElementVisibility(textBox){
    if(textBox.style.display === 'block'){
        textBox.style.display = 'none';
    }
    else{
        textBox.style.display = 'block';
    }
}