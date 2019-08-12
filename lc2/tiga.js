/*
==================================
Array Mastery: Split Me!
==================================

Diberikan sebuah function splitMe yang menerima 1 parameter berupa string.
Output adalah function tersebut adalah array multidimensi dimana parameter
dipisahkan dari karakter spesial (,), ($) atau (#) kemudian dipisah lagi per-huruf.
Lihatlah contoh berikut untuk melihat polanya

contoh 1:
input: "aqrst,ukaei,ffooo"
output: [ [ 'a', 'q', 'r', 's', 't' ],
          [ 'u', 'k', 'a', 'e', 'i' ],
          [ 'f', 'f', 'o', 'o', 'o' ]

RULES:
  - DILARANG MENGGUNAKAN built in function .split
*/


// write the function here
function splitMe(str){
    // var ABJAD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA';
    var abjad = 'abcdefghijklmnopqrstuvwxyz0123456789';

    var final = [];
    var output = [];
    var temp = [];

    for(var i = 0; i < str.length; i++){
        for(var j = 0; j < abjad.length; j++){
            if(str[i] == abjad[j]){
                temp.push(str[i]);
            }   
        }
        output.push(temp)
        temp = [];
    }
    var x = false;
    for(i = 0; i < output[0].length; i++){
        if(output[i][0] != []){
            final.push(output[i][0]);
        }
        else if(output[i][0] != []){
            
            continue;
        }
    }
    console.log(output)
}

console.log(splitMe("aqrst,ukaei,ffooo"));
/*
[ [ 'a', 'q', 'r', 's', 't' ],
  [ 'u', 'k', 'a', 'e', 'i' ],
  [ 'f', 'f', 'o', 'o', 'o' ] ]
*/
// console.log(splitMe("12wq36#787uyr$ffwqsw,trewqi"));
/*

[ [ '1', '2', 'w', 'q', '3', '6' ],
  [ '7', '8', '7', 'u', 'y', 'r' ],
  [ 'f', 'f', 'w', 'q', 's', 'w' ],
  [ 't', 'r', 'e', 'w', 'q', 'i' ] ]
*/
// console.log(splitMe("12#787,uyr$ffwq"));
/*
[ [ '1', '2' ],
  [ '7', '8', '7' ],
  [ 'u', 'y', 'r' ],
  [ 'f', 'f', 'w', 'q' ] ]
*/
