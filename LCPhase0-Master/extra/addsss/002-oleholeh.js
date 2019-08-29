// *

// How Many Gifts
// ==============

// Anastasia meminta Sergei untuk membeli daftar oleh-oleh saat trip berikutnya, sekarang Sergei ingin tahu berapa jumlah oleh-oleh PALING BANYAK yang bisa dia beli.

// Implementasikan function dibawah untuk membantu Sergei:

// function howManyGifts(maxBudget, gifts)
//   Parameter pertama adalah budget Sergei, yang kedua adalah sebuah Array yang berisi harga setiap oleh-oleh. Function ini harus mengembalikan nilai yang mewakili jumlah maksimum oleh-oleh yang Sergei dapat beli.


// Contoh:
// Maximum budget: 25000
// Daftar harga oleh-oleh: [20000, 5000, 10000, 6000, 4000 ]
// Maka akan mengembalikan 4 karena bisa membeli oleh-oleh dengan harga 5000, 10000, 6000, 4000

// Asumsi:
// - Semua angka akan memiliki nilai >= 0, dan array tidak akan pernah kosong.

// RULE:
//  WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE

//  Algorithm :
//  1. create a variable with the value of 0
//  2. sort dulu yang mana preoritas nya (dari besar ke terkecil)
//  3. 



// function howManyGifts(maxBudget, gifts){
	
// 	var harga = gifts.sort(function(value1, value2){ return value1 > value2 });
// 	var jumlah = 0
// 	var total = gifts[0]

// 	if(maxBudget < gifts[0]){
// 		return jumlah
// 	}

// 	for (var i = 0; i < gifts.length; i++) {
// 		if(total <= maxBudget){
// 			total += gifts[i];
// 			jumlah++
// 		}
// 	}
// 	return jumlah
// }

// console.log(howManyGifts(30000, [15000, 12000, 5000, 3000, 10000])); // 4
// console.log(howManyGifts(10000, [2000, 2000, 3000, 1000, 2000, 10000])); // 5
// console.log(howManyGifts(4000, [7500, 1500, 2000, 3000])); // 2
// console.log(howManyGifts(50000, [25000, 25000, 10000, 15000])); // 3
// console.log(howManyGifts(0, [10000, 3000])); // 0

   function passfailed(input){
   var obj = {}
   var kelas = {}
   for(let i = 0; i < input.length ; i++){
       if(obj[input[i].class] === undefined){
           obj[input[i].class] = {
               class: input[i].class,
               pass: [],
               failed: [],
               average: 0
           }
       }
       kelas[input[i].class] = 0
       var total = 0
       for(let j = 0; j < input.length; j++){
           if(input[i].class === input[j].class){
               kelas[input[i].class] ++
               total += input[j].score
           }
       }
       obj[input[i].class].average = total/kelas[input[i].class]

       if(input[i].score >= obj[input[i].class].average){
           obj[input[i].class].pass.push(input[i].name)
       }else if(input[i].score < obj[input[i].class].average){
           obj[input[i].class].failed.push(input[i].name)
       }
   }
   return Object.values(obj)
}
console.log(passfailed(
   [
       {
           name: "‘Jono’",
           score: 70,
           class: "‘A’"
       },
       {
           name: "‘fauzan’",
           score: 80,
           class: "‘A’"
       },{
           name: "‘maitreya’",
           score: 65,
           class: "‘C’"
       },{
           name: "‘laurence’",
           score: 65,
           class: "‘C’"
       },
       {
           name: "‘simbah’",
           score: 80,
           class: "D"
       },
   ]
))