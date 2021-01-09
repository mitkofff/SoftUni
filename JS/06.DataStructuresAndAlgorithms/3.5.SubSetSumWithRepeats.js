function solve(arr, target){
    let numbers = arr.split(', ').map(x => Number(x));
    let targetSum = target;

    let possibleSum = [];
    possibleSum[0] = true;

    for(sum=0; sum<targetSum + 1; sum++){
        if(possibleSum[sum]){
            for(i=0; i<numbers.length; i++){
                var newSum = sum + numbers[i];
                if(newSum<=targetSum){
                    possibleSum[newSum] = true;
                }
            }
        }
    }

    while(targetSum != 0){
        for(i=0; i<numbers.length; i++){
            let sum = targetSum - numbers[i];
            if(sum>0 && possibleSum[sum]){
                console.log(numbers[i]);
                targetSum = sum;
            }
        }
    }
}

solve('3, 5, 2', 7);