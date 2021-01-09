function selectionSortRecursive(arr, index){
    if(index >= arr.length-2){
        return arr;
    }
    let currentMinElementIndex = getMinElementIndex(arr, index);
    swap(arr, index, currentMinElementIndex);
    
    return selectionSortRecursive(arr,index + 1);
}

function getMinElementIndex(arr, index){
    let minValue = Number.MAX_SAFE_INTEGER;
    let minValueIndex;
    for(j=index+1; j<arr.length; j++){
        if(minValue>arr[j]){
            minValue = arr[j];
            minValueIndex = j;          
        }
    }
    return minValueIndex;
}

function swap(arr, firstIndex, secondIndex){
    let tempValue = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tempValue;
}

let arr2 = [5, 1, 2, 53, 0, 3, 50 , -5];
console.log(selectionSortRecursive(arr2, 0));