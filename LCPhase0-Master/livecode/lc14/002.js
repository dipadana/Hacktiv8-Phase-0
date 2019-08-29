/*
    wajib pseudocode. 

    Jawaban pseudocode disini 
    
*/

function soal2(param) {
    var dict = 'abcdefghijklmnopqrstuvwxyz';
    var counter = 0;
    var result = [];

    if(param === 0){
        return 'invalid input'
    }

    for(var i = 0; i < param; i++){
        var collect = [];
        for(var j = 0; j < param; j++){
            if(counter === 26){
                counter = 0;
            }
            collect.push(dict[counter])
            counter++
        }
        result.push(collect)
    }
    return result
}

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input

// time: 6 mins