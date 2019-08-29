/*
================
Kalkulator Nilai
================

[INSTRUCTIONS]
Kamu diminta menghitung Nilai Ujian Nasional dari sebuah laporan nilai murid.
Buatlah function kalkulatorNilai yang menerima satu parameter berupa string.
function tersebut akan menghitung total nilai dan memutuskan apakah murid tersebut lulus/tidak.
Adapun ketentuannya:
    - A bernilai 4
    - B bernilai 3
    - C bernilai 2
    - D bernilai 1
    - E bernilai 0
- Murid dinyatakan TIDAK LULUS jika ada mata pelajaran memperoleh nilai E, selain itu LULUS.

[RULES]
- WAJIB menggunakan ALGORITMA atau PSEUDOCODE.
*/


// Algorithm or pseudocode here

// 1. Membuat sebuah variable 'total' menampung nilai 0, yang nantinya 
//    variable ini digunakan untuk menampung total hasil nilai perhitungan.
// 2. Membuat sebuah variable 'E' yang menampung nilai FALSE.
// 3. Melakukan perulangan sebanyak jumlah dari inputan nilai yang masuk.
// 4. Didalam perulangan melakukan perkondisian dan penghitungan nilai.
// 5. Jika karakter yang dicek memilki nilai sama dengan huruf 'A', total ditambah dengan nilai 4.
// 6. Jika karakter yang dicek memilki nilai sama dengan huruf 'B', total ditambah dengan nilai 3.
// 7. Jika karakter yang dicek memilki nilai sama dengan huruf 'C', total ditambah dengan nilai 2.
// 8. Jika karakter yang dicek memilki nilai sama dengan huruf 'D', total ditambah dengan nilai 1.
// 9. Jika karakter yang dicek memilki nilai sama dengan huruf 'E', total ditambah dengan nilai 0, dan lanjut ke step 10.
// 10. Ubah nilai dari variable 'E' menjadi TRUE.
// 11. Ketika perulangan telah selesai dilakukan perkondisian lagi,
//     jika variabel 'E' bernilai TRUE, maka murid tersebut dinyatakan TIDAK LULUS,
//     jika tidak, maka murid tersebut dinyatakan LULUS.

function kalkulatorNilai(nilai) {
    var total = 0;
    var E = false;
    for(var i = 0; i < nilai.length; i++){
        if(nilai[i] == 'A'){
            total += 4;
        }
        else if(nilai[i] == 'B'){
            total += 3;
        }
        else if(nilai[i] == 'C'){
            total += 2;
        }
        else if(nilai[i] == 'D'){
            total += 1;
        }
        else if(nilai[i] == 'E'){
            total += 0;
            E = true;
        }
    }
    console.log(total)
    if(E){
        return 'Total Nilai: ' + total + ". Maaf kamu TIDAK LULUS.";
    }
    else{
        return 'Total Nilai: ' + total + ". Maaf kamu LULUS.";
    }
}

  console.log(kalkulatorNilai("AABCADDA")); // Total Nilai: 23. Selamat kamu LULUS!
  console.log(kalkulatorNilai("AAAAEA")); // Total Nilai: 20. Maaf kamu TIDAK LULUS.
  console.log(kalkulatorNilai("ABCDD")); // Total Nilai: 11. Selamat kamu LULUS!