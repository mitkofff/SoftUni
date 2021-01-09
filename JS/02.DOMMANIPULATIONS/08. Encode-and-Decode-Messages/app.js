function encodeAndDecodeMessages() {
    const mainContainer = document.getElementById('main');
    const textAreas = document.querySelectorAll('textarea');
    mainContainer.addEventListener('click', function(e){
        if(e.target.tagName === 'BUTTON' && e.target.textContent === 'Encode and send it'){
            let originalMessage = textAreas[0].value;
            let encodedMessage = encodeMessage(originalMessage, 1);
            textAreas[0].value = '';
            textAreas[1].value = encodedMessage;
        }
        else if(e.target.tagName === 'BUTTON' 
            && e.target.textContent === 'Decode and read it'
            && textAreas[1].value !== null){
            let decodedMessagge = decodeMessage(textAreas[1].value, 1);
            textAreas[1].value = decodedMessagge;
        }
    });
}

function encodeMessage(message, coef){
    let charArray = message.split('');
    let encodedMessagge = '';
    charArray.forEach(ch => {
        ch = String.fromCharCode(ch.charCodeAt(0) + coef);
        encodedMessagge = encodedMessagge.concat(ch);
    });
    return encodedMessagge;
}

function decodeMessage(message, coef){
    let charArray = message.split('');
    let decodedMessagge = '';
    charArray.forEach(ch => {
        ch = String.fromCharCode(ch.charCodeAt(0) - coef);
        decodedMessagge = decodedMessagge.concat(ch);
    });
    return decodedMessagge;
}