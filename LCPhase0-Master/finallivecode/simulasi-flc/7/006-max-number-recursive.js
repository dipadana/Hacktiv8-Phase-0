/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function angkaTerbesar(sentence) {}


// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 7
console.log(angkaTerbesar([])) // -1
































// function angkaTerbesar(sentence) {

//     if(sentence.length === 1){
//        return sentence[0]
//    } 

//    else {
       
//        var angkaPertama = sentence[0]
//        var angkaKedua = sentence[1]
//        //[4,3,2,1]
//        if(angkaPertama < angkaKedua){
//            sentence.splice(1,1)
//            return angkaTerbesar(sentence)
//        } else if (angkaPertama > angkaKedua){
//            //masuk sini lagi dan mengulang lagi dari line 48
//            sentence.splice(0, 1)
//            return angkaTerbesar(sentence)
//        }
//    }
// }