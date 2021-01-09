function solve(){
class Ballon{
    constructor(color, gasWeight){
        this.color = color;
        this.gasWeight = gasWeight;
    }
    set gasWeight(value) {
        if(value>0){
            this.gasWeight = value;
        }
    }
}

class PartyBalloon extends Ballon{
    constructor(color, gasWeight, ribbonColor, ribbonLength){
        super(color, gasWeight);
        this._ribbon = {
            color: ribbonColor, 
            length: ribbonLength,
        }
    }

    get ribbon(){
        return this._ribbon;
    }
}

class BirthdayBalloon extends PartyBalloon{
    constructor(color, gasWeight, ribbonColor, ribbonLength, text){
        super(color, gasWeight, ribbonColor, ribbonLength);
        this.text = text;
    }

    get text(){
        return this.text;
    }
}
    return{
        Ballon,
        PartyBalloon, 
        BirthdayBalloon,
    }
}

console.log(solve());