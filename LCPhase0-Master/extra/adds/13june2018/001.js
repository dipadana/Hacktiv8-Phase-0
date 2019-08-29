function soal1(param) {
    var result = [];
    for (var i=0; i<param; i++) {
        if ((i-3) % 4 === 0) {
            result.push('Fizz')
        }
        else if ((i-6) % 7 === 0) {
            result.push('Buzz')
        }
        else {
            result.push('')
        }
    }
    return result;
}

/*
param: total length
fizz: 3, 7, 11, 15 -> + 4 -> if (i-3)%4 === 0
buzz: 6, 13 -> + 7 -> else (i-6) % 7 === 0
*/

console.log(soal1(20))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz']

console.log(soal1(10))
// ['','','','Fizz','','','Buzz','Fizz','','']

console.log(soal1(30))
// ['','','','Fizz','','','Buzz','Fizz','','','','Fizz','','Buzz','','Fizz','','','','Fizz','Buzz','','','Fizz','','','','FizzBuzz','','']

// time: 15 mins