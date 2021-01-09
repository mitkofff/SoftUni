function argumentsInfo(...args){
    argumentsType = {};
    args.forEach(element => {
        if(argumentsType.hasOwnProperty(typeof(element))){
            argumentsType[typeof(element)]++;
        }
        else{
            argumentsType[typeof(element)] = 1;
        }
    });
    for(const key of Object.keys(argumentsType)){
        console.log(`${key} = ${argumentsType[key]}`);
    }
    return argumentsType;
}

argumentsInfo('cat', 42, function () { console.log('Hello world!'); }, 4, 2, 'mit', true);