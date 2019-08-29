// hanya boleh menggunakan rekursif

function soal3(param1, param2) {
    if (param2 === 0) {
        return 1; // karena dikaliin terus, jadi return 1
    }
    else {
        var modifKali = param2 - 1;
        return param1 * soal3(param1, modifKali);
    }
}

console.log(soal3(2,5))
/*
    2 * 2 * 2 * 2 * 2 
    32
*/

console.log(soal3(3,3))
/*
    3*3*3 = 27
*/

// time: 10 mins

