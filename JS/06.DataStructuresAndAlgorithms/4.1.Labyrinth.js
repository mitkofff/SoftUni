function solve(row, col, arr){
    let inputArr = arr.split('');
    let labyrinth = [];
    let path = [];
    for(i=0; i<row; i++){
        let currentRow = []
        labyrinth.push(currentRow);

        for(j=0; j<col; j++){
            currentRow.push(inputArr.shift());
        }
    }
    solution(0, 0, 'F');
    function solution(row, col, direction){
        if(outSideOfLabyrinth(row, col)){
            return;
        }
        path.push(direction);
        if(ifExit(row,col)){
            printSolution();
        }
        else if(isPassable(row, col)){
            labyrinth[row][col] = 'x';
            solution(row+1, col, 'D');
            solution(row-1, col, 'U');
            solution(row, col+1, 'R');
            solution(row, col-1, 'L');
            labyrinth[row][col] = '-'
        }
        path.pop();
    }

    function outSideOfLabyrinth(row, col){
        if(row<0 || row>=labyrinth.length){
            return true;
        }
        if(col<0 || col>=labyrinth[0].length){
            return true;
        }
        return false;
    }

    function ifExit(row,col){
        if(labyrinth[row][col] === 'e'){
            return true;
        }
        return false;
    }

    function isPassable(row, col){
        if(labyrinth[row][col] === 'x'){
            return false;
        }
        else if(labyrinth[row][col] === '*'){
            return false;
        }else{
            return true;
        }
    }
    function printSolution(){
        
        console.log(path.join('').slice(1, path.length));
    }

}

solve(3, 3, '----*---e');

solve(3, 5, '-**-e-----*****');