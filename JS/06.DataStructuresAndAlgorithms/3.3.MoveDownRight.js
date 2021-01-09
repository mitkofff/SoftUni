function solve(rows, cols, members){
    let matrix = [];
    let numbers = members.split(' ').map(x=>Number(x));
    for(i=0; i<rows; i++){
        let subVector = [];
        matrix.push(subVector)
        for(j=0; j<cols; j++){
           subVector[j] = numbers.shift();
        }
    }
    console.log(matrix.toString(', '));

    let sumElementMatrix = []
    for(i=0; i<rows; i++){
        let row = [];
        sumElementMatrix.push(row);
    }

    sumElementMatrix[0][0] = matrix[0][0];
    for(i=1; i<cols; i++){
        sumElementMatrix[0][i] = sumElementMatrix[0][i-1] + matrix[0][i]; 
    }
    for(i=1; i<rows; i++){
        sumElementMatrix[i][0] = sumElementMatrix[i-1][0] + matrix[i][0]; 
    }
    for(i=1; i<rows; i++){
        for(j=1; j<cols; j++){
            let maxNeighbour = Math.max(sumElementMatrix[i-1][j], sumElementMatrix[i][j-1]);
            sumElementMatrix[i][j] = maxNeighbour + matrix[i][j];
        }
    }

    console.log(sumElementMatrix.toString(', '));

    var maxRow = sumElementMatrix.map(function(row){ return Math.max.apply(Math, row); }); 
    let indexes
    var max = Math.max.apply(null, maxRow); 
    for(i=0; i<rows; i++){
        for(j=0; j<cols; j++){
            if(sumElementMatrix[i][j] === max){
                indexes = [i, j];
            }
        }
    }
    elements = [];
    elements.push(indexes);
    
    while(true){
        if(sumElementMatrix[indexes[0]-1][indexes[1]]>sumElementMatrix[indexes[0]-1][indexes[1]]){
            
        }
    }
    console.log(max);

}



solve(4, 4, '1 3 2 1 5 3 2 1 1 7 3 1 1 3 1 1');