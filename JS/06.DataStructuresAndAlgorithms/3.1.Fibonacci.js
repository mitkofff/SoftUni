function fibonacci(n){
    let firstNum = 0;
    let result = 1;

    for(i=0; i<n-1; i++){
        result += firstNum;
        firstNum = result - firstNum;
    }
    return result;
}

function fibRecursive(n){
    if(n == 1 || n == 2){
        return 1;
    }
    return fibRecursive(n-1) + fibRecursive(n - 2)
}
// 0 1 1 2 3 5 8 13 

function fibDinamic(n){
    var list = [0, 1, 1];
    
    const fibonator = (n) => {
        if(list[n]){
            return list[n];
        }
        
        list[n]= fibonator(n-1) + fibonator(n-2); 
        return list[n];
    }
    return fibonator(n);
}

//console.log(fibonacci(20));
console.log(fibRecursive(7));
console.log(fibDinamic(7));
