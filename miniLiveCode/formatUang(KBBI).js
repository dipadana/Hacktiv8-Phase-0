/*
================
Format Uang (KBBI)
================
[INSTRUCTIONS]
formatUang adalah sebuah function yang menerima satu parameter berupa number.
function akan mereturn sebuah sebuah string yang merupakan format uang (KBBI) seperti:
Rp1.500,00
[RULE]
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi array untuk pemecahan masalah.
- Dilarang menggunakan regex .match dan lainnya!
*/

function uang(num){
    // Mengkonversi angka yang masuk menjadi string, 
    // agar bisa diakses karakter - perkarakter
    var str = String(num);

    // Membuat variable untuk tampungan dan output
    var temp = [];
    var output = '';

    // Kenapa lengthnya 3?
    // Karena setiap 3 angka akan ditambahkan. 
    var length = 3;

    // Menggunakan unshift karena mata uang dihitungnya dari belakang,
    // sehingga angka diinputkan dari angka yang paling belakang
    for(var i = str.length-1; i >= 0; i--){
        if(temp.length == length){
            temp.unshift('.')
            // kenapa length selanjutnya ditambah 4, karena
            // ditambah satu perhitungan karakter '.' maka 3 + 1 = 4
            length += 4;
        }
        temp.unshift(str[i])
    }

    // Lalu array yang sudah terbentuk akan di gabungkan menjadi
    // satu kesatuan dan di return
    for(var i = 0; i < temp.length; i++){
        output += temp[i]
    }
    return 'Rp'+(output)+',00'

}

console.log(uang(1500));