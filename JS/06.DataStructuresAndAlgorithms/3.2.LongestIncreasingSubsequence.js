function solve(sequence){
    let arr = sequence.split(' ').map(x => Number(x));
    let arrMemberCount = [];
    let prevElement = []
    for(i = 0; i< arr.length; i++){
        arrMemberCount[i] = 1;
        prevElement[i] = -1
            for(j=i-1; j>= 0; j--){
                let a = arr[i];
                let b = arr[j];
                if((arr[i]) > (arr[j])){
                    arrMemberCount[i]+=arrMemberCount[j];
                    prevElement[i] = j;
                    break;
                }              
            }

        }
        let result = [];
        let maxCunt = Math.max(...arrMemberCount)
        let index = arrMemberCount.indexOf(maxCunt);

        while (index > -1){
            result.unshift(arr[index]);
            index = prevElement[index];
        }
        console.log(result.join(', '));
    }


solve('3 14 5 12 15 7 8 9 11 10 1');
solve('1 2 5 3 4');
solve('4 3 2 1');
solve('4 2 -1 3 5 5');
