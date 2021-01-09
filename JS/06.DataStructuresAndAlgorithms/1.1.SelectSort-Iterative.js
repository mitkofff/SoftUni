function selectionSort(arr){
    for(i=0; i<arr.length-1; i++){
        let minValue = Number.MAX_SAFE_INTEGER;
        let minValueIndex;
        for(j=i+1; j<arr.length; j++){
            if(minValue>arr[j]){
                minValue = arr[j];
                minValueIndex = j;          
            }
        }
        if(minValueIndex && arr[i]>minValue){
            swap(arr, i, minValueIndex);
        }
    }
    return arr;
}

function swap(arr, firstIndex, secondIndex){
    let tempValue = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tempValue;
}

let arr = [5, 1, 2, 53, 0, 3, 50 , -5];
console.log(selectionSort(arr));