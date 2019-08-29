// function soal2(param) {
//     if (param.length <=2) {
//         return 'Invalid input'
//     }
//     else {
//         var totalKali = param[0] * param[param.length-1];
//         if (param.length % 2 === 0) { // genap
//             // console.log('genap');
//             var centerEven = param.length/2;
//             param[centerEven] = totalKali;
//             param[centerEven-1] = totalKali;
            
//         } 
//         else { // ganjil
//             var centerOdd = Math.floor(param.length/2);
//             param[centerOdd] = totalKali;
//         }
//         return param;
//     }
// }

function soal2(param) {
    var mid = Math.floor(param.length/2);

    if(param.length <= 2){
        return 'invalid input'
    }else{
        if(param.length%2 === 1){
            param[mid] = param[0]*param[param.length-1]
        }else{
            param[mid] = param[0]*param[param.length-1]
            param[mid-1] = param[0]*param[param.length-1]
        }
    }
    return param
}

console.log(soal2([34,'','','',40])) //
// [34,''1360,'',40]

console.log(soal2([1,2,3,4,5]))
// [1,2,5,4,5]

console.log(soal2([20,'','','','','','',30])) //
// [20,'','',600,600,'','',30])

console.log(soal2([6,'','','','','',9]))
// [6,'','',54,'','',9]

console.log(soal2([1,2])) // invalid input 
console.log(soal2([1])) // invalid input 
console.log(soal2([])) // invalid input 

// time: 11 mins