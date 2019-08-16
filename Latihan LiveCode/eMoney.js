// Live Coding Week 5 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

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

function eMoneySplit (stringData) {
    var arr = stringData.split(',');

    console.log(arr)

    var temp = [];
    var temp2 = [];

    // Rubah data jadi object
    for(var i = 0; i < arr.length; i++){
        temp.push(arr[i].split(':'));
    }

    console.log(temp)

    for(var i = 0; i < temp.length; i++){
        temp2.push({
            name : temp[i][0],
            money : Number(temp[i][1])
        })
    }

    console.log(temp2)

    // Object di sort bersarkan score
    sortAsc(temp2);

    return !stringData ? 'tidak ada catatan eMoney' : 'Terbanyak adalah ' + temp2[temp2.length-1].name + ' dan terdikit adalah ' + temp2[0].name
}




console.log(eMoneySplit('bagus:200000,ali:20000,bagas:300000,andre:50000'))
// terbanyak adalah bagas dan terdikit adalah ali
console.log(eMoneySplit('andre:50000'))
// terbanyak adalah andre dan terdikit adalah andre
console.log(eMoneySplit(''))
// tidak ada catatan eMoney