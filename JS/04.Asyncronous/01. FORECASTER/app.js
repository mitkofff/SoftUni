 function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const locationInput = document.getElementById('location');
    const currentDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');
    const forecastDiv = document.getElementById('forecast');
    
    const locationsURL = 'https://judgetests.firebaseio.com/locations.json';
    const forecastURLBase = 'https://judgetests.firebaseio.com/forecast/'
    
    const weatherSymbols = {
        's': '☀',
        'p': '⛅',
        'o': '☁',
        'r': '☂',
        'd': '°'
    }

    submitBtn.addEventListener('click', async function(e) {

        fetch(locationsURL)
            .then(deserialiceData)
            .then(data => {
                const {name, code} = data.find((obj) => obj.name === locationInput.value);
                const todayForecastUrl = forecastURLBase + `today/${code}.json`;
                const nextDaysForecastUrl = forecastURLBase + `upcoming/${code}.json`;

                Promise.all([fetch(todayForecastUrl).then(deserialiceData), 
                    fetch(nextDaysForecastUrl).then(deserialiceData)])
                        .then(currentCondition);
            })
            .catch(handleError)
    })
    function currentCondition([todayData, upcomingData]){
        const {condition, low, high} = todayData.forecast;
        let degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;
        currentDiv.innerHTML = '';
        upcomingDiv.innerHTML = '';

        let spanConditionSimbol = createEl('span', ['condition', 'symbol'], weatherSymbols[condition[0].toLowerCase()]);
        let spanCondition = createEl('span', ['condition']);
        let spanLocation = createEl('span', ['forecast-data'], todayData.name);
        let spanTemperature = createEl('span', ['forecast-data'], degreesInfo);
        let spanType = createEl('span', ['forecast-data'], condition);
    
        forecastDiv.style.display = 'block'
        currentDiv.appendChild(spanConditionSimbol);
        spanCondition.appendChild(spanLocation);
        spanCondition.appendChild(spanTemperature);
        spanCondition.appendChild(spanType);
        currentDiv.appendChild(spanCondition);

        nextDaysForecast(upcomingData);
    }

    function nextDaysForecast({forecast, name}){
        let divNextDaysForecast = createEl('div', ['forecast-info']);
        forecast.forEach(({condition, high, low}) => {
            let spanUpcoming = createEl('span', ['upcoming']);
            
            let degreesInfo = `${low}${weatherSymbols.d}/${high}${weatherSymbols.d}`;

            let spanConditionSimbol = createEl('span', ['symbol'], weatherSymbols[condition[0].toLowerCase()]);
            let spanTemperature = createEl('span', ['forecast-data'], degreesInfo);
            let spanCondition = createEl('span', ['condition'], condition);

            spanUpcoming.appendChild(spanConditionSimbol);
            spanUpcoming.appendChild(spanTemperature);
            spanUpcoming.appendChild(spanCondition);
            divNextDaysForecast.appendChild(spanUpcoming);
        });
        upcomingDiv.appendChild(divNextDaysForecast);
    }
}

attachEvents();


async function getLocationCode(location, locationsURL){
    try{
        let locationCode = await fetch(locationsURL);
        let locations = await locationCode.json();
        let {name, code} = locations.find(x => x.name === location);
        return code
    }
    catch(err){
        errorHandler(err)
    }
}

async function getForeCast(todayForecastURL){
    try{
        let locationCode = await fetch(todayForecastURL);
        locations = await locationCode.json();

        return locations
    }
    catch(err){
        errorHandler(err)
    }
}

function createEl(tagName, classNames, textContent){
    let el = document.createElement(tagName);
    if(classNames){
        el.classList.add(...classNames);
    }
    if(textContent){
        el.textContent = textContent;
    }
    return el;
}

function errorHandler(err){
    console.log('ERROR:');
    let divElement = document.getElementById('content');
    createEl('h2', err, divElement);
}
function deserialiceData(x) {return x.json();}

function handleError(x){
    if(!x.ok)
        throw new Error(x.statusText);
    return x;
}
/*
function deserialiceData(x) {return x.json();}

function fetchData(hError = handleError, dData = deserialiceData, url='https://judgetests.firebaseio.com/locations.json'){
    return fetch(url)
        .then(hError)
        .then(dData)
        .catch(console.error);
}
/*
async function getLocationCode1(location){
    fetch('https://judgetests.firebaseio.com/locations.json')
        .then(r => r.json())
        .then(x => {
            let {name, code} = locations.find(x => x.name === location);
            return code
        })
}

async function getLocationCode1(location){
    let locationCode = await fetch('https://judgetests.firebaseio.com/locations.json')
    let locations = await locationCode.json();
    let {name, code} = locations.find(x => x.name === location);
    return code
}*/