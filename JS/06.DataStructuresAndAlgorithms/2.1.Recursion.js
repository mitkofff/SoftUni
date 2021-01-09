function sum(arr, index){
    if(index >= arr.length){
        return 0;
    }
    return arr[index] + sum(arr, index+1);

}

let arr = [1, 2, 3, 4, 5];
let sumResult = sum(arr, 0);
console.log(sumResult);