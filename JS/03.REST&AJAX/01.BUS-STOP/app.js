function getInfo() {
    const submitBtn = document.querySelector('#submit');
    const stopIdElement = document.querySelector('#stopId');
    const stopNameElement = document.querySelector('#stopName');
    const busesElement = document.querySelector('#buses');
    let stopId = stopIdElement.value;

    if(submitBtn === null || stopId === null 
        || stopName === null || busesElement === null){
        throw new Error("Missing DOM element!");
    }

    let uri = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    getData(uri, stopNameElement, busesElement);


}

function getData(uri, stopNameElement, busesElement){
    fetch(uri)
    .then((response) => response.json())
    .then((data) => {
        const {name, buses} = data;
        stopNameElement.textContent = name;
        Object.entries(buses).forEach(([busId, busTime]) => {
            createElement('li', `Bus ${busId} arrives in ${busTime}`, busesElement);
        })
    })
    .catch((error) => {
        stopNameElement.textContent = 'Error';
        busesElement.textContent = '';
    });
}

function createElement(type, content, parent){
    let element = document.createElement(type);
    element.textContent = content;
    parent.appendChild(element);
}