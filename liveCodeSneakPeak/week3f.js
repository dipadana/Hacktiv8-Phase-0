/*
[INSTRUKSI]
Setiap student di HACKTIV8 ditugaskan untuk membuat tim project dengan komposisi tim dua orang.
Kita membutuhkan sebuah program untuk membuat tim-tim tersebut.
Function pairUp akan menerima satu parameter berupa array yang berisi string nama student.
Function ini akan mengelompokkan setiap dua nama menjadi satu kelompok, dan apabila tersisa satu student, student terakhir akan bersama instruktur.
Hasil pengelompokkan adalah sebuah array yang berisi string berupa nama dua orang student sebagai satu tim.
Formatnya adalah <Nama Student 1> dan <Nama Student 2>.

[CONTOH]
input: ['Budi', 'Badu', 'Indra', 'Indri']
output: ['Budi dan Badu', 'Indra dan Indri']

input: ['Budi', 'Badu', 'Indra', 'Indri', 'James']
output: ['Budi dan Badu', 'Indra dan Indri', 'James dan Instruktur']

input: []
output: []
*/

function pairUp(arr){
    var output = [];
    for(var i = 0; i < (arr.length)-1; i+=2){
        output.push(arr[0+i] + ' dan ' + arr[1+i]);
    }
    if(arr.length%2 != 0){
        output.push(arr[arr.length-1] + ' dan Instruktur')
    }
    return output;
}

console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri','Dipa','Dian'])); //output: ['Budi dan Badu', 'Indra dan Indri']
console.log(pairUp(['Budi', 'Badu', 'Indra', 'Indri', 'James']));
console.log(pairUp([]));