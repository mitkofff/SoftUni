let solution = (() => {
    //console.log(args[0][0]);
    //console.log(args[1][1]);
    let  add = (varctor1, vector2) => [varctor1[0]+vector2[0], varctor1[1] + vector2[1]];
    let multiply = (vector, scalar) => [vector[0]*scalar, vector[1]*scalar];
    let length = (vector) => Math.sqrt(vector[0]**2 + vector[1]**2);

    return {add, multiply,length}
})();
console.log(solution.add([1,1],[1,0]));
console.log(solution.multiply([2,1],3));
console.log(solution.length([3,4]));
