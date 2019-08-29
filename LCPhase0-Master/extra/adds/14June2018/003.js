function soal3(param1) {
    var angka = []
    var temp = 1
    for (var i=0; i<param1; i++) {
        angka.push([]);
        
        for (var j=0; j<param1; j++) { // limit berfungsi untuk memasukkan hanya 3 nilai ke angka[i]
            if (i%2 === 0) { // ganjil
                angka[i].push(j+temp)
            }
            else if (i%2 == 1) { // genap
                angka[i].unshift(j+temp)
            }
            
        }
            temp += param1;
        // console.log(temp)
    }
    return angka
}

/*
var temp
ganjil
push

genap
unshift
*/

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
