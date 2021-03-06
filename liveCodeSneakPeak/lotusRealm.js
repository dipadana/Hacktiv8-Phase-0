/*
===========
lotusRealms
===========
[INSTRUCTIONS]
lotusRealms adalah sebuah fungsi yang menerima parameter berupa array
of objects dan akan mengembalikan info siapa saja yang akan bertahan dari perang.
[EXAMPLE]
INPUT: [
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]
PROCESS:
  1. Serpent menyerang Samurai sebesar 300 => health Samurai menjadi 200
  2. Samurai menyerang Wolf sebesar 400 => health Wolf menjadi 200
  3. Wolf menyerang Serpent sebesar 300 => health Serpent menjadi 700
  4. Lotus menyerang Wolf sebesar 2000 => health Wolf menjadi -1800 dan Wolf gugur dalam realms
OUTPUT: [
  { clan: 'Serpent', totalHealth: 700 },
  { clan: 'Samurai', totalHealth: 200 },
  { clan: 'Lotus', totalHealth: 3000 }
]
[RULES]
  1. Diasumsikan pemenang akan selalu ada, dan clans tidak pernah kosong.
  2. Dilarang menggunakan built in function .filter(), .map(), .forEach(), dan .reduce()
*/

// Old Version
var tempHealt = 0;
function lotusOld(arr){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr.length; j++){
      if(input[i].clan == input[j].attack && input[i].clan != input[j].clan){
        input[i].totalHealth -= input[j].totalAttack;
      }
    } 
    if(arr[i].totalHealth > 0){
      output.push({
        clan :  input[i].clan,
        totalHealth : input[i].totalHealth
      })
    }
  }
  return (output);
}

// New version
function lotus(arr){
	// Membuat sebuat arra kosong sebagai tampungan
	var output = [];

	// Dilakukan proses penguragan totalHealt bersarkan total attack yang diberikan
	for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < arr.length; j++){
			// Jika attack yg masuk sesuai dengan clan yang di cek, maka langsung dikurangi
			if(arr[i].attack == arr[j].clan){
				arr[j].totalHealth = arr[j].totalHealth - arr[i].totalAttack;
			}
		}
	}

	// Setelah semua selesai dihitung,
	// maka langsung di masukkan object berdasarkan 
	// hasil nilai perhitungan ke dalam array tampungan
	for(var i = 0 ; i < arr.length; i++){
		if(arr[i].totalHealth > 0){
			output.push({
				clan : arr[i].clan,
				totalHealth : arr[i].totalHealth
			})
		}
	}
	return output;
}

var input = [
  { clan: 'Serpent', attack: 'Samurai', totalAttack: 300, totalHealth: 1000 },
  { clan: 'Samurai', attack: 'Wolf', totalAttack: 400, totalHealth: 500 },
  { clan: 'Wolf', attack: 'Serpent', totalAttack: 300, totalHealth: 600 },
  { clan: 'Lotus', attack: 'Wolf', totalAttack: 2000, totalHealth: 3000 }
]

console.log(lotus(input));

// OUTPUT: [
//   { clan: 'Serpent', totalHealth: 700 },
//   { clan: 'Samurai', totalHealth: 200 },
//   { clan: 'Lotus', totalHealth: 3000 }
// ]

