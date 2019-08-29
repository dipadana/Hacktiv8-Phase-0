/*
==========
negaraKota
==========

yaitu sebuah program khusus untuk mengelompokkan data yang berserakan 
berupa negara dan kota dari internet berupa array multidimensi. 

[INSTRUCTION]
tugas kalian adalah merapikan 
data yg di dapat tersebut menjadi object literal yg mudah di baca.

untuk dapat mengetahui perbedaan antara data negara dan kota adalah : 
1. negara 
bentuk data negara berupa array yg berisi 3 data yaitu : 
[n,a,b]
n = penanda kalau ini data negara 
a = kode negara , yang nanti nya sebagai acuan penyocok dengan data kota 
b = nama negara , yang akan menjadi key output
2. kota 
bentuk data kota berupa array yg berisi 2 data yaitu : 
[a,c]
a = kode negara , yang nanti nya sebagai acuan penyocok dengan data negara
c = nama kota , yang nantinya akan di pasangkan dengan nama negara masing - masing 

[EXAMPLE] 
input : [
["n","id","Indonesia"],["id","Jakarta"],["n","usa","Amerika Serikat"],
["id","Surabaya"],["usa","New York"],["usa","Washington DC"],["usa","California"],
["n","ch","China"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"]
]
maka outputnya :
{   
    Indonesia: [ 'Jakarta', 'Surabaya' ],
    'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
    China: [ 'Beijing', 'Shanghai' ],
    India: [ 'Bangalore', 'New Delhi' ],
    Rusia: [ 'Moscow' ] 
}

[RULE]
- Dilarang menggunakan build in function array apapun kecuali push() 
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
*/

//CARA 1
function negaraKota(array) {
  var result = {}

  for(var i = 0; i < array.length; i++){
    var isCountry = false;
    if(array[i][0] === 'n'){                        // buat key dari nama negara
      result[array[i][2]] = []
      isCountry = true;
    }

    if(isCountry){
      for(var j = 0; j < array.length; j++){
        if(array[i][1] === array[j][0]){
          result[array[i][2]].push(array[j][1])     // isi nama kota dari tiap negara
        }
      }
    }
  }
  return result
}


// CARA 2

// function negaraKota(array) {
//   var result = {};
//   var country = [];

//   for(var i = 0; i < array.length; i++){
//     if(array[i][0] === 'n'){                      // isi 'country' dengan array yg terdapat nama negara
//       country.push(array[i])
//     }
//   }

//   for(var j = 0; j < array.length; j++){
//     for(var k = 0; k < country.length; k++){
//       if(array[j][0] === country[k][1]){
//         if(result[country[k][2]]){
//           result[country[k][2]].push(array[j][1]) // bandingkan id negara dari 'array' dengan 'country'
//         }else{                                    // lalu masukkan ke result object 
//           result[country[k][2]] = [array[j][1]]
//         }
//       }
//     }
//   }
//   return result
// }

console.log(negaraKota([
["n","id","Indonesia"],["id","Jakarta"],["n","usa","Amerika Serikat"],
["id","Surabaya"],["usa","New York"],["usa","Washington DC"],["usa","California"],
["n","ch","China"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"]
]))

/*
{
    Indonesia:['Jakarta','Surabaya'],
    'Amerika Serikat':['New York','Washington DC','California'],
    China:['Beijing','Shanghai'],
    India:['Bangalore','New Delhi'],
    Rusia:['Moscow']
}
*/

// console.log(negaraKota([
//     ["n","br","Brazil"],["br","Rio de Jeneiro"],["n","usa","Amerika Serikat"],
//     ["ru","St. Petersburg"],["usa","New York"],["ksa","Mekkah"],["usa","Washington DC"],["usa","California"],
//     ["n","ch","China"],["ksa","Madinah"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
//     ["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"],["n","ksa","Arab Saudi"]
// ]))

/*
{
    Brazil: [ 'Rio de Jeneiro' ],
    'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
    China: [ 'Beijing', 'Shanghai' ],
    India: [ 'Bangalore', 'New Delhi' ],
    Rusia: [ 'St. Petersburg', 'Moscow' ],
    'Arab Saudi': [ 'Mekkah', 'Madinah' ] 
}
*/