/*
===========
eMoneySplit
===========
[INSTRUCTIONS]
eMoneySplit adalah sebuah fungsi yang menerima parameter berupa string
dan akan mengembalikan nilai string yang merupakan jumlah terbanyak dan terdikit.
[EXAMPLE]
INPUT: "bagus:200000,ali:20000,bagas:300000,andre:50000"
OUTPUT: terbanyak adalah bagas dan terdikit adalah ali
[NOTES]
1. Apabila tidak ada data tampilkan "tidak ada catatan eMoney"
[RULES]
1. WAJIB menggunakan algoritma/pseudocode atau -50 poin
*/

// Merupakan standart function untuk sort
function sortAsc(arr){
    var max = 0;
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i].money > arr[j].money){
                max = arr[i];
                arr[i] = arr[j];
                arr[j] = max;
            }
        }
    }
    return arr;
}

function eMoneySplit(str){
    // Pertama melakukan split data yang masuk sebanyak dua kali,
    // pertama menghilangkan tanda ',' dan kedua menghilangkan tanda ':'
    // kedua proses split ini akan menghasilkan array dua dimensi
    var temp = str.split(',');
    var arr = [];
    for(var i = 0; i < temp.length; i++){
        arr.push(temp[i].split(':'));
    }

    // Lalu, membuat object dari array dua dimensi yang dihasilkan
    var obj = [];
    for(var i = 0 ; i < arr.length; i++){
        obj.push({
            name : arr[i][0],
            money : Number(arr[i][1])
        })
    }

    // Object yang telah terbentuk, lalu di urutkan berdasarkan nilai uang
    // dari yang terkecil ke yang terbesar
    sortAsc(obj);
    
    // Lalu dilakukan pengecekakan, jika tidak ada string yg masuk, 
    // maka langsung direturn tidak ada uang yang masuk,
    // tapi jika ada, direturn pemilik transaksi terbanyak dan yang paling sedikit
    return str == '' ? 'tidak ada catatan eMoney' : 'terbanyak adalah ' + obj[obj.length-1].name + ' dan terdikit adalah ' +obj[0].name;
}

// TEST CASE
console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney