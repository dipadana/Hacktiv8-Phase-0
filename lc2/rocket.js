/*
===============
Treasure Finder
===============

Kru bajak laut hacktiv-arr sedang melakukan pencarian harta karun.
buatlah sebuah fungsi finder yang dapat menghitung berapa banyak
harta karun yang mereka temukan selama perjalanan.

- fungsi finder menerima sebuah parameter berupa string
  dan menghitung julah harta karun yang terdapat dalam input string tersebut
- harta karun yang dicari adalah: h, a, r, t, k, u, n
- harta karun akan berkurang jika di dalam input terdapat angka, dan pengurangannya disesuaikan dengan angka yang muncul
  misal: jika muncul angka 5 maka harta akan berkurang 5

- fungsi akan mereturn jumlah harta karun yang diperoleh
- jika tidak menemukan harta karun me-return 'Harta karun tidak ditemukan'
- jika harta karun habis karena terlalu banyak angka/pengurangan, maka return 'Harta karun telah direbut bajak laut lain!'

[Rules]
  - Dilarang menggunakan built-in function .indexOf, .includes, .match, ataupun regex
*/

function finder(treasure) {
    var count = 0;
    var str = treasure.join('')
    
    for(var i = 0; i < str.length; i++){
        switch (str[i]){
            case 'h' : count += 1; break;
            case 'a' : count += 1; break;
            case 'r' : count += 1; break;
            case 't' : count += 1; break;
            case 'k' : count += 1; break;
            case 'u' : count += 1; break;
            case 'n' : count += 1; break;
            case '1' : count -= 1; break;
            case '2' : count -= 2; break;
            case '3' : count -= 3; break;
            case '4' : count -= 4; break;
            case '5' : count -= 5; break;
            case '6' : count -= 6; break;
            case '7' : count -= 7; break;
            case '8' : count -= 8; break;
            case '9' : count -= 9; break;
        }
    }
  
}
  
  
//   console.log(finder(['harta', 'karun'])) // Berhasil memperoleh 10 harta karun
  console.log(finder(['treasure', '3', 'hunt'])) // Berhasil memperoleh 6 harta karun
//   console.log(finder(['assassins', 'cr3ed', 'black', 'f1ag'])) // Berhasil memperoleh 3 harta karun
//   console.log(finder(['kjsadf', 'hlkjhasfd', 'lxcmvnbzcv', 'baksljdslkjdfh', 'awiuekjsadf', 'jkagfkjg99'])) // Harta karun telah direbut bajak laut lain!
//   console.log(finder([''])) // Harta karun tidak ditemukan
//   console.log(finder([])) // Harta karun tidak ditemukan