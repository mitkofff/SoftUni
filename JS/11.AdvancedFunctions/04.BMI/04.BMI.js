function personalBMI(...args){
    let person = {
        name: args[0],
        personalInfo: {
            age: args[1],
            weight: args[2],
            height: args[3],
        },
        BMI: Math.round(args[2] / ((args[3]/100) ** 2)).toPrecision(3),
        status:"",
    }
    if(person.BMI<18.5){
        person.status = 'underweight';
    }
    else if(person.BMI<25){
        person.status = 'normal';
    }
    else if(person.BMI<30){
        person.status = 'overweight';
    }
    else{
        person.status = 'obese';
    }

    if(person.BMI>=30){
        person.recommendation = 'admission required';
    }

    return JSON.stringify(person);
}

console.log(personalBMI('Honey Boo Boo', 9, 57, 137))

console.log(personalBMI('Peter', 29, 75, 182))