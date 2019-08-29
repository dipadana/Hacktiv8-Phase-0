/*
  ================
  ASIAN GAMES GANJIL GENAP
  ================

  description: Sebuah fungsi yang akan mengembalikan berapa banyak jumlah pelanggaran lalu lintas
  yang terjadi saat asian games berlangsung. Pelanggaran akan terhitung apabila
  ada plat mobil yang melintas pada tanggal tertentu dengan nomor plat yang tidak
  sama dengan aturan ganjil genap
  
  rules:
  1. tidak boleh menggunakan built in function .filter(), .map(), .reduce()
  2. Function menerima parameter berupa tanggal dan data kendaraan yang melintas
  3. Function hanya akan bisa membaca dari tanggal 1 sampai 31 ( asumsi setiap bulan memiliki range tanggal tersebut )
  4. Contoh membaca nomor plat kendaraan adalah misal B 1234 HAHA, berarti yang dilihat cukup
  angka paling belakang dari 1234 berarti 4, berati nomor plat mobil ini termasuk genap


  examples:
  JIKA INPUT DATA KENDARAAN = [{
    plat: 'B 1234 ABC',
    type: 'Mobil'
  }, {
    plat: 'A 2457 HE',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Mobil'
  }]
  DAN INPUT TANGGAL ADALAH = 18
  MAKA OUTPUTNYA ADALAH 1, yaitu hanya plat mobil Z 999 ERT karena merupakan jenis kendaraan
  mobil dan memiliki plat genap    
*/

function ganjilGenapAsianGames ( date, data ) {}



console.log(ganjilGenapAsianGames(30, [{
  plat: 'B 1234 ABC',
  type: 'Mobil'
}, {
  plat: 'A 2457 HE',
  type: 'Motor'
}, {
  plat: 'AB 87 RFS',
  type: 'Motor'
}, {
  plat: 'Z 999 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(26, [{
  plat: 'A 24 HE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 ERT',
  type: 'Mobil'
}])) // 1

console.log(ganjilGenapAsianGames(1, [{
  plat: 'A 24 WE',
  type: 'Mobil'
}, {
  plat: 'AB 871 RFS',
  type: 'Mobil'
}, {
  plat: 'Z 9992 XOXO',
  type: 'Mobil'
}])) // 2

console.log(ganjilGenapAsianGames(1, [
  {
    plat: 'A 2431 HE',
    type: 'Motor'
  }, {
    plat: 'AB 87112 RFS',
    type: 'Motor'
  }, {
    plat: 'Z 999 ERT',
    type: 'Motor'
  }
])) // 0

console.log(ganjilGenapAsianGames(32, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates

console.log(ganjilGenapAsianGames(0, [{
  plat: 'X 123 HAHA',
  type: 'Mobil'
}])) // invalid dates



  




  // function ganjilGenapAsianGames ( date, data ) {

  //   var counter = 0;
  
  //   if(date%2 === 0){
  //     var temp = []
  //     for(var i = 0; i < data.length; i++){
  //       // console.log(data[i])
  //       if(data[i].type === "Mobil"){
  //         temp.push(data[i].plat)
  //       }
  //     }
  
  //     var number = [];
  //     // var counter = 0
  //     for(var j = 0; j < temp.length; j++){
  //       // console.log(temp[j])
  //       var str = ""
  //       for(var k = 0; k < temp[j].length; k++){
  //         if(temp[j][k] === "1" || temp[j][k] === "2" ||temp[j][k] === "3" ||temp[j][k] === "4" ||temp[j][k] === "5" ||temp[j][k] === "6" ||temp[j][k] === "7" || temp[j][k] === "8" || temp[j][k] === "9" || temp[j][k] === "10"){
  //           str += temp[j][k]
  //         }
  //       }
  //       // console.log(str)
  //       number.push(str);
  
  //       if(str%2 === 0){
  //         counter++
  //       }
  //     }
  //     // console.log(counter)console.log(str)
  //   } else if (date%2 === 1){
  //     var mobil = []
  //     for(var i = 0; i < data.length; i++){
  //       // console.log(data[i])
  //       if(data[i].type === "Mobil"){
  //         mobil.push(data[i].plat)
  //       }
  //     }
  //     // console.log(mobil)
  //     var number = [];
  //     // var counter = 0
  //     for(var j = 0; j < mobil.length; j++){
  //       // console.log(temp[j])
  //       var str1 = ""
  //       for(var k = 0; k < mobil[j].length; k++){
  //         if(mobil[j][k] === "1" || mobil[j][k] === "2" ||mobil[j][k] === "3" ||mobil[j][k] === "4" ||mobil[j][k] === "5" ||mobil[j][k] === "6" ||mobil[j][k] === "7" || mobil[j][k] === "8" || mobil[j][k] === "9" || mobil[j][k] === "10"){
  //           str1 += mobil[j][k]
  //         }
  //       }
  //       // console.log(str)
  //       number.push(str);
  //       if(str1%2 === 0){
  //         counter++
  //       }
  //     }
  //   }
  //   return counter
  // }