// Live Coding Week 5 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox
/*
========
warOfFun
========
[INSTRUCTIONS]
warOfFun adalah sebuat fungsi yang menerima parameter berupa string dan
akan mengembalikan nilai string yang merupakan pemenang perlombaan.
[EXAMPLE]
INPUT: [
 ['andre', 'toni', 'toti'],
 ['risk', 'fun', 'go'],
 ['humble', 'psycho', 'strong']
]
PROCESS:
1. array[0] akan berisi nama-nama pemain
2. array-aray pada indeks berikutnya akan berisi attribut-attribut yang dimiliki oleh setiap pemain sesuai dengan indeksnya
3. pada array[1] andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun
4. pada array[2] andre tidak memiliki fun, toni tidak memiliki fun, dan toti tidak memiliki fun.
5. total andre tidak memiliki fun, toni memiliki 1 fun, dan toti tidak memiliki fun, sehingga pemenangnya adalah toni.
OUTPUT: pemenangnya adalah toni
[NOTES]
 1. Apabila tidak ada pemenang tampilkan "mohon maaf tidak ada pemenangnya"
 2. Asumsi tidak akan ada yang seri tapi tidak selalu ada pemenangnya
[RULES]
 1. Dilarang menggunakan built in function .sort()
*/

//fun.push(temp[i].match(/fun/gi))

function warOfFun (arr) {
    if(arr.length == 0){
        return 'mohon maaf tidak ada pemenang';
    }
    var temp = [];
    var result = 0;
    var fun = [];
    for(var i = 0; i < arr[0].length; i++){
        fun.push(0);
    }
    console.log(fun)
    var obj = {};
    
    for(var i = 0; i < arr.length; i++){
        for(var j = 1; j < arr.length; j++){
            temp.push(arr[j][i])
        }
        obj[arr[0][i]] = temp;
        temp = [];
    }

    console.log(obj)
    
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < obj[arr[0][i]].length; j++){
            if(obj[arr[0][i]][j] == 'fun'){
                fun[i]++;
            }
        }
    }

    console.log(fun)

    // cari jumlah fun terbanyak, catat indeknya
    var temp = 0;
    for(var i = 0; i < fun.length; i++){
        if(temp < fun[i]){
            temp = fun[i];
            result = i;
        }
    }

    console.log(result)

    return result == 0 ? 'mohon maaf tidak ada pemenang' : 'pemenangnya adalah ' + arr[0][result];    
}

// TEST CASE
console.log(warOfFun([
   ['andre', 'toni', 'toti'],
   ['risk', 'fun', 'go'],
   ['humble', 'psyhco', 'strong']
 ]))
 // pemenangnya adalah toni

 console.log(warOfFun([
   ['andre', 'toni', 'toti', 'tito'],
   ['fun', 'fun', 'fun'],
   ['fun', 'fun'],
   ['nonfun', 'fun', 'fun', 'fun']
 ]))
 // pemenangnya adalah toni

 console.log(warOfFun([
   ['andre', 'toni'],
   ['risk', 'go'],
   ['humble', 'strong']
 ]))
 // mohon maaf tidak ada pemenangnya

 console.log(warOfFun([]))
 // mohon maaf tidak ada pemenangnya