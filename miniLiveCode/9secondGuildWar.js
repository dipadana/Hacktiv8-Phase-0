/*
  /////////////////////
  2ND WINNER GUILD WARS
  /////////////////////
  Function Guild Wars akan menentukkan juara ke-2 dalam bentuk string, dari peringkat 1 ke 4.
  Jumlah peserta selalu array dengan length 4.
  EXAMPLE
  INPUT: ['OOOO', 'ooOO', 'o', 'OOo']
  INFO:
  - O dihitung 2
  - o dihitung 1

  GUIDE:
  - Awal Sisi Kiri: (Tim 1 vs Tim 2) dan Sisi Kanan: (Tim 3 vs Tim 4)
  - Pemenang dari Sisi Kiri vs pemenang dari Sisi Kanan menghasilkan juara 1 dan 2
  - Yang kalah dari Sisi Kiri vs yang kalah dari Sisi Kanan menghasilkan juara 3 dan 4

  PROCESS:
  - Sisi Kiri => OOOO vs ooOO => OOOO (win), ooOO (lose)
  - Sisi Kanan => o vs OOo => o (lose), OOo (win)
  - Winner vs Winner => OOOO vs OOo => OOOO (1), OOo (2)
  - Loser vs Loser => ooOO vs o => ooOO(3), o (4)
  - Urutan pemenang [OOOO, OOo, ooOO, o]

  OUTPUT:
  Juara Ke-2 adalah tim OOo
  RULES:
  1. Jumlah yang bertanding selalu 4 tim
  2. Asumsi total kekuatan di setiap tim tidak ada yang sama/TIDAK ADA SERI
*/

function calculateProcess(str1, str2){
  var arr = [str1, str2];
  var result = []
  for(var i = 0; i < arr.length; i++){
    var temp = 0;
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] == 'O'){
        temp += 2;
      }
      else if(arr[i][j] == 'o'){
        temp += 1;
      }
    }
    result.push(temp)
  }
  // return result.sort(function(a, b) { return b - a });
  var output = [];
  console.log(result)
  if(result[0] > result[1]){
    output.push(str1);
    output.push(str2);
  }
  else if(result[0] < result[1]){
    output.push(str2);
    output.push(str1);
  }

  return (output);
}

// console.log(calculateProcess('ooO','OOOO'))

function guildWars(arr){
  var output = [];

  var arrKiri = calculateProcess(arr[0],arr[1]);
  var arrKanan = calculateProcess(arr[2],arr[3]);

  // console.log(arrKiri[0])

  var menangKiri = arrKiri[0];
  var menangKanan = arrKanan[0];
  var kalahKiri = arrKiri[1];
  var kalahKanan = arrKanan[1];

  var menang = calculateProcess(menangKiri,menangKanan);
  var kalah = calculateProcess(kalahKiri,kalahKanan);

  console.log(menang)
  console.log(kalah)

  for(var i = 0; i < 2; i++){
    output.push(menang[i]);
    // output.menang[1];
  }
  for(var j = 0; j < 2; j++){
    output.push(kalah[j]);
    // output.kalah[1];
  }
  console.log(output)
  return 'Juara ke-2 adalah tim ' + output[1];
}

// TEST CASE
console.log(guildWars(['OOOO', 'ooOO', 'o', 'OOo']))
// Juara ke-2 adalah tim OOo
console.log(guildWars(['OO', 'OOO', 'ooOOO', 'OOOo']))
// Juara ke-2 adalah tim OOO
console.log(guildWars(['ooo', 'oooo', 'oo', 'o']))
// Juara ke-2 adalah tim oo