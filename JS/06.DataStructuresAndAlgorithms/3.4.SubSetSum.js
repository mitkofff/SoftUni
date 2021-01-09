function solve(arr, sum){
    let numbers = arr.split(', ').map(x=>Number(x));
    let sums = new Object();
    sums[Number(0)]=0;
    for(i=0; i<numbers.length; i++){
        for (const key in sums) {
            let newSum = Number(key) + Number(numbers[i]);
            if(!sums[newSum]){
                sums[newSum] = numbers[i]
            }
        }
    }
    
    if(sums[sum]){
        console.log('YES');
        let numbersList = [];
        while(sum !== 0){
            numbersList.unshift(sums[sum]);
            sum -= sums[sum];
        }
        console.log(numbersList.join(', '))
    }else{
        console.log('NO')
    }
}

solve('3, 5, 1, 4, 2', 11);

