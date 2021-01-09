function attachEventsListeners() {
    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    if(daysBtn === null || hoursBtn === null || minutesBtn === null || secondsBtn === null
        || daysInput === null || hoursInput === null || minutesInput === null || secondsInput === null){
        throw new Error('Missing DOM element/s');
    }

    document.addEventListener('click', function (e){
        if(e.target.getAttribute('type') === 'button'){
            if(e.target.getAttribute('id') === 'daysBtn'){
                convert(daysInput, hoursInput, minutesInput, secondsInput);
            }
            else if(e.target.getAttribute('id') === 'hoursBtn'){
                convert(hoursInput, daysInput, minutesInput, secondsInput);
            }
            else if(e.target.getAttribute('id') === 'minutesBtn'){
                convert(minutesInput, daysInput, hoursInput, secondsInput);
            }
            else if(e.target.getAttribute('id') === 'secondsBtn'){
                convert(secondsInput, daysInput, hoursInput, minutesInput);
            }
        }
    })

}

function convert(input, convert1, convert2, convert3){
    let type = input.getAttribute('Id');
    var coef = convertCoef(type);
    convert1.value = Number(input.value)*Number(coef[0]);
    convert2.value = Number(input.value)*coef[1];
    convert3.value = Number(input.value)*coef[2];
}

function convertCoef(typeName){
    if(typeName === 'days'){
        return [24, 24*60, 24*60*60];
    }
    else if(typeName === 'hours'){
        return [1/24, 60, 60*60];
    }
    else if(typeName === 'minutes'){
        return [1/(24*60), 1/60, 60];
    }
    else if(typeName === 'seconds'){
        return [1/(24*60*60), 1/(60*60), 1/60];
    }
}