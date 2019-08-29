/*
    analisa sendiri dengan apa yang diminta soal melalui test case. 
    wajib menggunakan pseudocode

    PSEUDOCODE HERE : 


*/
// function soal1(param) {
    
//     if (param <= 0) {
//         return 'Invalid input'
//     }
//     else {
//         var result = [];
//         for (var i=0; i<param; i++) {
//             if (i === 0) {
//                 result.push('!');
//             }
//             else if (result[i-1] === '!') {
//                 result.push('@')
//             } 
//             else if (result[i-1] === '@') {
//                 result.push('#')
//             }
//             else if (result[i-1] === '#') {
//                 result.push('!')
//             }
            
//         }
//         return result;
//     }
// }

function soal1(param) {
    if (param <= 0) {
        return 'Invalid input'
    }
    else {
        var result = [];
        for (var i=0; i<param; i++) {
            if (i % 3 === 0) { // i: 0,3,6
                result.push('!');
            }
            else if ((i-1) % 3 === 0) { // i: 1, 4, 7 
                result.push('@');
            }
            else if ((i-2) % 3 === 0) { // i: 2, 5, 8, etc.
                result.push('#')
            }
        }
        return result;
    }
}

console.log(soal1(3))
// output : ['!','@','#']

console.log(soal1(6));
// output : ['!','@','#','!','@','#']

console.log(soal1(4))
// output : ['!','@','#','!']

console.log(soal1(0)) // invalid input

/*
0 3 6 -> ! var tandaSeru = 0 += 3
1 4 7 -> @
2 5 8 -> #

*/
