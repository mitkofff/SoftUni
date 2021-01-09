function notify(message) {
    const notificationDiv = document.getElementById('notification');
    if(notificationDiv === null){
        throw new Error('Misiing DOM element!');
    }
    notificationDiv.innerHTML = message;

    showTemporaryElementText(notificationDiv);
}

function showTemporaryElementText (element){
    element.style.display = 'block';
    setTimeout(function() {hideElementText(element)}, 2000);
}

function hideElementText(element){
    element.style.display = 'none';
}