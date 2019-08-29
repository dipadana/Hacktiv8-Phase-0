/* Encrypt me
    Kamu adalah seorang agen rahasia yang ingin mengirimkan pesan ke partnermu,untuk menmbuat kode yang kamu kirim tetap konfidental,
    kamu harus mengikuti sebuah kamus yang dimiliki oleh H8BI (Hacktiv8 Bureau of Investigation)

  Berikut adalah kamus huruf dari HBI
  huruf biasa abcdefghijklmnopqrstuvwxyz
  huruf H8BI  !@#$%^&*()-+1234567890[]{}

  Buatlah sebuah function yang mentranslate kata kata biasa, menjadi kata kata ter enkripsi menggunakan kamus H8BI!

  Note:
  - Selain karakter huruf biasa maka tidak akan di-translate

  Contoh 1:
  encrypt(dimitri) akan menghasilkan => $(1(86(

  Contoh 2:
  encrypt(@wtian) akan menghasilkan => @[8(!2

  Selamat berjuang, agen rahasia..

  RULES:
  ------
  - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE, jika tidak ada maka dianggap tidak mengerjakan
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION .indexOf !

  PSEUDOCODE :

  STORE "alphabet" with the value string of "abcdefghijklmnopqrstuvwxyz"
  STORE "code" with the value string of "!@#$%^&*()-+1234567890[]{}"

    FOR LOOP index o to length of "alphabet"
      FOR LOOP index 0 to length of "code"

*/
function encrypt(input) {}


console.log(encrypt('dimitri')) // $(1(86(
console.log(encrypt('irsyah mardiah')) //(67{!* 1!6$(!*
console.log(encrypt('dimitr€€')) // $(1(86€€
console.log(encrypt('d!mas')) // $!1!7
console.log(encrypt('@wtian')) // @[8(!2
















// function encrypt(input) {

//   var alphabet = "abcdefghijklmnopqrstuvwxyz";
//   var code = "!@#$%^&*()-+1234567890[]{}";
//   var str = ""
//   // console.log(alphabet)

//   for(var i = 0; i < input.length; i++){
//     // console.log(alphabet[i])
//     var same = false;
//     for(var j = 0; j < alphabet.length; j++){
//       // console.log(code[j])
//       if(input[i] === alphabet[j]){
//         same = true;
//         break;
//       }
//     }
//     if(same === true){
//       str += code[j]
//     } else {
//       str += input[i]
//     }
//   }
//   return str
// }