/*
Poin Calculator
================
[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5
[RULE]
- WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/


// PEUDOCODE
// STORE 'input' with any string (ex : 'GBS')
// STORE 'medalTemp' with array [0,0,0]
// STORE 'totalPoint' with 0
// STORE 'counter' with 0
// WHILE 'counter' LESS THAN length of 'input'
//    IF 'input[i]' EQUALS TO 'G'
//       DO 'medalTemp[0]' ADD with 1 AND ADD 'totalPoint' by 2
//    ELSE IF 'input[i]' EQUALS TO 'S'
//       DO 'medalTemp[1]' ADD with 1 AND ADD 'totalPoint' by 1
//    ELSE IF 'input[i]' EQUALS TO 'B'
//       DO 'medalTemp[2]' ADD with 1 AND ADD 'totalPoint' by 0.5
//    END IF
// ADD 'counter' by 1
// DISPLAY result as 'Jumlah Gold: ' + medalsTemp[0] + ', jumlah Silver: ' + medalsTemp[1] + ', jumlah Bronze: ' + medalsTemp[2] + '. Dan totalnya adalah: ' + totalPoint;


function poinCalculator(str){
    var medalsTemp = [0,0,0];
    var totalPoint = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i] == 'G'){
            medalsTemp[0]++;
            totalPoint += 2;
        }
        else if(str[i] == 'S'){
            medalsTemp[1]++;
            totalPoint += 1;
        }
        else if(str[i] == 'B'){
            medalsTemp[2]++;
            totalPoint += (1/2);
        }
    }
    return 'Jumlah Gold: ' + medalsTemp[0] + 
    ', jumlah Silver: ' + medalsTemp[1] + 
    ', jumlah Bronze: ' + medalsTemp[2] + 
    '. Dan totalnya adalah: ' + totalPoint;
}

console.log(poinCalculator('GBS')); // jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5