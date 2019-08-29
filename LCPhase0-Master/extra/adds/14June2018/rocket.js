function rocket(param) {
    var result = []
    for (var i=0; i<param; i++) {
        result.push([]);
        for (var j=0; j<param; j++) {
            result[i].push([i]);
            result[i][j].push(j);
        }
    }
    return result
}

/*

*/

console.log(rocket(3))

/*
    [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]]
    ]
*/

// time: 7 mins