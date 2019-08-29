function soal1(param) {
    if (param === 0) {
        return 'Invalid input'
    }
    else {
        var result = [];
    for (var i=0; i<param; i++) {
        result.push('');
    }
    
    if (param % 2 === 0) { // genap
        result[(param-2)/2] = "*";
        result[(param-2)/2 + 1] = "*";
    }
    else { // ganjil 5/2
        result[Math.floor(param/2)] = '*';
    }
    return result;
    }
    
}

// test case
console.log( soal1(5) ) 
/*
    output : 
    ['','','*','','']
*/

console.log( soal1(4)) // ['','*','*','']

console.log( soal1(7)) // ['','','','*','','','']

console.log( soal1(10)) // ['','','','','*','*','','','','']

console.log( soal1(0)) // invalid input 

console.log( soal1(1)) // ['*']

/*

bikin array ['','']
if ganjil 

else


*/