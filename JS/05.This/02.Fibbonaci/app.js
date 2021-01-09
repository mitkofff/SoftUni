function getFibonator(){
    let currentNumber = 0;
    let nextNumber = 1;

    return function(){
        let result = currentNumber + nextNumber;
        currentNumber = nextNumber;
        nextNumber = result;
        return currentNumber;
    }
}

let fib = getFibonator();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());