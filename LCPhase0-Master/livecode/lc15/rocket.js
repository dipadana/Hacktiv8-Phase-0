function rocket(param)
{
    var result = [];
    var mid = Math.floor(param/2)
    for(var i = 0; i < param; i++){
        var collect = [];
        for(var j = 0; j < param; j++){
            if(param%2 === 1){
                if(i === mid && j === mid){
                    collect.push('*')
                }else{
                    collect.push('')
                }
            }else{
                if(i === mid && j === mid || i === mid && j === mid-1 || i === mid-1 && j === mid || i === mid-1 && j === mid-1){
                    collect.push('*')
                }else{
                    collect.push('')
                }
            }
        }
        result.push(collect)
    }
    return result
}

console.log(rocket(5)) 
/*
    [
        ['','','','',''],
        ['','','','',''],
        ['','','*','',''],
        ['','','','',''],
        ['','','','','']
    ]
*/

console.log(rocket(3))
/*
    [
        ['','',''],
        ['','*',''],
        ['','',''],
      
    ]
*/

console.log(rocket(4))
/*
    [
        ['','','',''],
        ['','*','*',''],
        ['','*','*',''],
        ['','','',''],
        
    ]
*/

console.log(rocket(2))
/*
    [
        ['*','*'],
        ['*','*'],
    ]
*/

console.log(rocket(1))
/*
    [
        ['*']
    ]
*/