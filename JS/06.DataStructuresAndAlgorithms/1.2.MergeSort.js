function mergeSort(arr){
    const halfLength = arr.length / 2;
    if(arr.length < 2){
        return arr;
    }

    const leftArr = arr.splice(0, halfLength);    
    return merge(mergeSort(leftArr), mergeSort(arr));
}

function merge(left, right){
    let arr = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            arr.push(left.shift());
        }
        else{
            arr.push(right.shift());
        }
    }
    return [...arr, ...left, ...right]
}

let array = [4, 8, 7, 2, 11, 1, 3];
console.log(mergeSort(array));

let array2 = [1, 5, 0, 20, 3, 53, 50];
console.log(mergeSort(array2));