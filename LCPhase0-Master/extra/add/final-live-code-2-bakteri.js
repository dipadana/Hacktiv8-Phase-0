/*
Tersedia 3 parameter sebagai inputan yang merupakan sebuah integer:
    1. N: jumlah bakteri setelah pembagian satu bakteri
    2. B: jumlah bakteri yang ditambahkan ke dalam kotak setiap hari
    3. i: hari yang kita ingin tahu jumlah bakterinya
output: jumlah bakteri pada hari ke-i
[CONTOH]
1) N=2; B=3; i=3 -> 13
*/

function jumlahBakteri(N, B, i) {
    if (i === 1) {
        return 1;
    }
    else {
        return jumlahBakteri(N, B, i-1)*N + B;
    }
 
}


console.log(jumlahBakteri(3,4,1)); // 1
console.log(jumlahBakteri(1,3,5)); // 13
console.log(jumlahBakteri(5,2,3)); // 37
console.log(jumlahBakteri(5,0,5)); // 625 

/*
result = 1 * N + B

soal 1:
hari 1: awal: 1
hari 2: 1(awal) * 2(N) + 3(B) -> awal: 5 
hari 3: 5(awal) * 2(N) + 3(B) -> awal: 13

soal 2:
hari 1: 1

soal 3: 
hari 1: 1
hari 2: 1*5 + 2 -> 7
hari 3: 7*5 + 2 -> 37

soal 4: 
hari 1: 1
hari 2: 1*5 + 0
dst





*/


