
//SOAL NOMOR 1

// var name='Rei'; // silakan berikan nilai bebas
// var age=19; // silakan berikan nilai bebas
// var citizenship='Indonesia'; // silakan berikan nilai bebas
// var taxId; // nilainya jangan di-assign langsung. gunakan program untuk mengisi ini!

// // Buat code disini

// var tahun=2017-age;
//   if(citizenship==="Indonseia"){
//     taxId='ABCD-'+tahun;
//   }else{
//     taxId='WKWK -'+tahun;
//   }
//   console.log(taxId);
// if (name===true && age===true && citizenship===true){
//   console.log(taxId);
// } else if(name===''){
//   console.log('NAMA ANDA KOSONG! TIDAK BISA DAFTAR!');
// }else if (age<17){
//   console.log('BELUM CUKUP UMUR!');
// }

//SOAL NOMOR 2

//gatau soalnya apaan tapi kayaknya sih disuruh bikin pyramid setengah gitu kayak asterisk tapi output nya angka lolol

// var height = 5;
// var str = "";

// for(var i = 1; i<=height; i++){
// 	str += i;
// 	console.log(str)
// }

//SOAL NOMOR 3

function division (num1, num2) {
	return num1/num2
}
  
function powerMe(num3, num4) {
	return Math.pow(num3, num4)
}
  
function mergeStrings(str1, str2, str3, str4) {
	console.log(str1 + "+" + str2 + "+"+ str3 + "+" + str4) //ga bisa di return, kenapaa??
}

console.log (division (6, 3));
console.log (powerMe (2, 3));
console.log(mergeStrings ('hello', 'world', 'nice', 'day'));
