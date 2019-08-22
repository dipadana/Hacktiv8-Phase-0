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
    var str = String(num);
    var temp = [];
    var output = '';
    var length = 3;

    for(var i = str.length-1; i >= 0; i--){
        if(temp.length == length){
            temp.unshift('.')
            length += 4;
        }
        temp.unshift(str[i])
    }

    for(var i = 0; i < temp.length; i++){
        output += temp[i]
    }
    return 'Rp'+(output)+',00'

}

console.log(uang(1500));