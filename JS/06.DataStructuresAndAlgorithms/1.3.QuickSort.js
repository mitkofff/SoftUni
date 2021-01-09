function quickSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    
    const pivot = arr[0];
    let left = [];
    let right = [];

    for(var i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

let array = [1, 5, 0, 20, 3, 53, 50];
console.log(quickSort(array));
