function soal1(param) {
    // IF param === 0
    if (param === 0) {
        return 'Invalid input'
    }
    
    // ELSE param !== 0
    // bikin array isi '':
    var result = [];
    for (var i=0; i<param; i++) {
        result.push('');
        }
    
    // RE-assign value ''  dengan '*'
    if (param % 2 === 0) { // genap
        result[(param-2)/2] = "*";
        result[(param-2)/2 + 1] = "*";
    }
    else { // ganjil 5/2
        result[Math.floor(param/2)] = '*';
    }

    return result;
}

// test case
console.log( soal1(5) ) // ['','','*','','']

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']


//OR

function soal1(param) {
    var mid = Math.floor(param/2);
    var result = [];
    if(param%2 === 0){
        for(var i = 0; i < param; i++){
            if(i === mid || i === mid-1){
                result.push('*')
            }else{
                result.push('')
            }
        }
    }else if(param%2 === 1){
        for(var i = 0; i < param; i++){
            if(i === mid){
                result.push('*')
            }else{
                result.push('')
            }
        }
    }
    if(param === 0){
        return 'Invalid input'
    }
    return result
}

// test case
console.log( soal1(5) ) // ['','','*','','']

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']
