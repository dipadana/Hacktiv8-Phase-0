/*
================
Monster Hunter
================

[INSTRUCTIONS]
sebagai hunter, kita akan mencari harta karun('$') selama dalam perjalanan.

perjalanan digambarkan dalam sebuah string dan ditandai dengan berbagai kode:
- '*' adalah tanda kita mendapatkan serangan dari monster
- 'x' adalah tanda kita melakukan serangan dan berhasil membunuh monster itu
- '$' adalah tanda berhasil mendapatkan gold selama di perjalanan
- '-' adalah tanda selama di perjalanan tidak terjadi apa-apa

jika selama perjalanan dia mendapatkan 3 serangan, maka hunter akan kembali pulang dan akan memberikan info berapa banyak gold($) yang didapatkan.
jika dia berhasil membunuh  5 monster, maka hunter akan pulang untuk beristirahat
dan jika selama perjalanan tidak masuk kondisi yang ada di atas, hunter akan memberikan info berapa banyak gold yang didapat

ps: PERHATIKAN TEST CASE UNTUK OUTPUT YANG SESUAI

Buatlah sebuah algoritma/pseudocode dan buatlah sebuah function yang akan menerima sebuah inputan string dengan output sesuai dengan penjelasan di atas.

[RULE]
- WAJIB menggunakan algoritma/ pseudocode

[EXAMPLE]
input: '---x---$-$-$-*-*-$'
proses: mengikuti kondisi di atas
output: 'Selamat, kamu berhasil mendapatkan 4 gold!'

Algoritma / Pseudocode here..
STORE jumlahGold with value 0
STORE jumlahNyawa with value 3
STORE jumlahMonster with value 5

FOR 'i' = 0 and 'i' < 'string.length' and i + 1
  IF 'string[i]' === '$' THEN
  'jumlahGold' + 1
  ELSE IF  'string[i]' === '*' THEN
      'jumlahNyawa' - 1
      IF 'jumlahNyawa' === 0 THEN
        DISPLAY 'kamu terluka parah, kamu hanya mendapatkan ' + jumlahGold + ' gold'
    ELSE IF 'string[i]' === 'x' THEN
      'killMonster' - 1
      IF 'killMonster' === 0 THEN
        DISPLAY 'Kamu kelelahan, kamu hanya mendapatkan ' + jumlahGold + ' gold'
  DISPLAY 'Selamat, kamu berhasil mendapatkan ' + jumlahGold + ' gold'
*/
function monsterHunter(string) {

}


console.log(monsterHunter('---x---$-$-$-*-*-$')) // 'Selamat, kamu berhasil mendapatkan 4 gold!'
console.log(monsterHunter('---x-xx-$-$-x-x-$-$-$')) // 'Kamu kelelahan, kamu hanya mendapatkan 2 gold'
console.log(monsterHunter('$$$---------***')) // 'Kamu terluka parah, kamu hanya mendapatkan 3 gold'
console.log(monsterHunter('$$$--x-x-x-$$-x--**')) // 'Selamat, kamu berhasil mendapatkan 5 gold!'



































// function monsterHunter(string) {
//   // Code here
//   var jumlahGold = 0
//   var monster = 0
//   var nyawa = 0
//   for (var i = 0; i < string.length; i++) {
//     if ( string[i] === 'x') {
//       monster++
//     }
//     else if (string[i] === '*') {
//       nyawa ++
//     }
//     else if (string[i] === '$' && nyawa <= 3 && monster <= 5 ) {
//       jumlahGold ++
//     }
//     if (monster === 5) {
//       return 'Kamu kelelahan, kamu hanya mendapatkan ' + jumlahGold + ' gold'
//     }
//     if (nyawa === 3) {
//       return 'Kamu terluka parah, kamu hanya mendapatkan ' + jumlahGold + ' gold'
//     }
     
    
//   }
//   return 'Selamat, kamu berhasil mendapatkan ' + jumlahGold + ' gold'

// }