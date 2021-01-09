function attachEvents() {
    const phoneBookUl = document.querySelector('#phonebook');
    const inputPerson = document.querySelector('#person');
    const inputPhone = document.querySelector('#phone');

    if(phoneBookUl === null){
        throw new Error("Missing DOM Element!");
    }  
    
    document.addEventListener('click', function(e){

        if(e.target.id === 'btnLoad'){
            loadPhones(phoneBookUl);
        }
        else if(e.target.textContent === 'Delete'){
            let elementId = e.target.getAttribute('data-target');
            deletePhone(elementId, phoneBookUl);
        }
        else if(e.target.id === 'btnCreate'){
            let person = inputPerson.value;
            let phone = inputPhone.value;
            createPhone(person, phone, phoneBookUl);
            inputPerson.value = '';
            inputPhone.value = '';  
        }
    });
}

function loadPhones(phoneBookUl){
    fetch('https://phonebook-nakov.firebaseio.com/phonebook/.json')
        .then(response => response.json())
        .then((data) => {
            phoneBookUl.textContent = '';
            Object.entries(data).forEach(([id, personPhone]) => {
                const {person, phone} = personPhone;
                let li = createElement('li', person +":" + phone);
                let deleteBtn = createElement('button', 'Delete');
                deleteBtn.setAttribute('data-target', id);               
                li.appendChild(deleteBtn);
                phoneBookUl.appendChild(li);
            })
        });      
}

function deletePhone(elementId, phoneBookUl){
    let headers = {
        method: 'DELETE'
    }
    fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${elementId}.json`, headers)
        .then(loadPhones(phoneBookUl));
}

function createPhone(person, phone, phoneBookUl){

    let headers = {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({person, phone})
    }
    fetch(`https://phonebook-nakov.firebaseio.com/phonebook/.json`, headers)
        .then(() => {
            loadPhones(phoneBookUl);
        });
}

attachEvents();

function createElement(type, content){
    let el = document.createElement(type);
    el.textContent = content;
    return el;
}