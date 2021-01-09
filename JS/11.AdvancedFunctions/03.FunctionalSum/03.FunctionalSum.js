let add = (function (){
    let sum = 0;
    return function calc(operand){
        sum +=operand;
        calc.toString = () => sum;
        return calc;
    }
})();

console.log(add(1)(2)(4));
