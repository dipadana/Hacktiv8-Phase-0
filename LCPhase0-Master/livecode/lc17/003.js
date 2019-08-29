// function soal3(param1) {
//     var angka = []
//     var temp = 1
//     for (var i=0; i<param1; i++) {
//         angka.push([]);
        
//         for (var j=0; j<param1; j++) { // limit berfungsi untuk memasukkan hanya 3 nilai ke angka[i]
//             if (i%2 === 0) { // ganjil
//                 angka[i].push(j+temp);
//             }
//             else if (i%2 !== 0) { // genap
//                 angka[i].unshift(j+temp)
//             }
            
//         }
//             temp += param1;
//     }
//     console.log(angka);
    
// }

function soal3(param1) {
    var result = [];
    var counter = 0;

    for(var i = 0; i < param1; i++){
        var collect = [];
        for(var j = 0; j < param1; j++){
            counter++
            if(i%2 === 1){
                collect.push(param1*(i+1)-j)//cara ini TANPA UNSHIFT,ntaps!!
            }else{
                collect.push(counter)
            }
        }
        result.push(collect)
    }

    return result
}

console.log(soal3(3))
/*
    [
        [1,2,3],
        [6,5,4],
        [7,8,9]
    ]

*/

console.log(soal3(2))
/*
    [
        [1,2],
        [4,3]
    ]

*/

console.log(soal3(4))
/*
    [
        [1,2,3,4],
        [8,7,6,5],
        [9,10,11,12],
        [16,15,15,13]
    ]

*/


// time: 12 mins
// time: 6 mins
