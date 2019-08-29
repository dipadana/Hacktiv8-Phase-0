/**
Kompetensi: Conditional

Implementasikan pseudocode yang kamu telah buat di nomor 1 menjadi sintaks javascript.

**/

// SKELETON CODE (Code Sample)

var umur = 2; // silakan berikan nilai bebas
var tinggi = 70;// silakan berikan nilai bebas
var tarif = 0;//tambahkan variable lain jika diperlukan

//your code here

if(umur > 1 && umur < 4){
    tarif = 20000
    if(tinggi > 70){
        tarif += 10000
    }
}else if(umur > 3 && umur < 8){
    tarif = 35000
    if(tinggi > 120){
        tarif += 15000
    }
}else if(umur > 7 && umur < 11){
    tarif = 50000
    if(tinggi > 150){
        tarif += 20000
    }
}


console.log(tarif)
