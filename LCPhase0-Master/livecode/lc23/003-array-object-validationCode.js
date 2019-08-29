/*
 * Array of Object
 * ----------------------------
 * Buatlah code validation untuk setiap user yang terdaftar
 * code validation merupakan hasil dari pertukaran karakter indexk ganjil dan genap dari nama user
 * ditambah tanggal bulan dan tahun join. Jika index huruf terakhir adalah genap maka tidak memiliki pasangan
 * maka huruf terakhir tersebut tidak mengalami proses pertukaran.
 *
 * contoh
 *  user aldo join pada 22 08 2018 maka validation codenya laod22092018
 */

// function addValidationCode(users){

//   var result = [];

//   if(!users.length){
//     return result;
//   }

//   var name = [];
//   var tanggal = [];

//   for (var i = 0; i < users.length; i++) {
//     // console.log(users[i].name)
//     name.push(users[i].name);
//     // console.log(users[i]['join date'])
//     tanggal.push(users[i]['join date']);
//   }

//   var code = []
//   for(var j = 0; j < tanggal.length; j++){
//     // console.log(tanggal[j]
//     code.push(tanggal[j].split("-").join(""))
//   }  

//   // console.log(code)

//   for(var a = 0; a < name.length; a++){
//     var index = name[a].slice(1, 2);
//     // result.push(obj)
//        var obj = {};
//       // var newName = index + name[a];
//       // var newName = name[a].slice(0, 1) + name[a].slice(4);
//         obj.name = name[a]

//         if(name[a] === "Antonio"){
//           obj.validationCode = index + name[a] + code[0];
//         } else if (name[a] === "Banderaz"){
//           obj.validationCode = index + name[a] + code[1];
//         } else if (name[a] === "Cecile"){
//           obj.validationCode = index + name[a] + code[0];
//         } else if (name[a] === "Dominique"){
//           obj.validationCode = index + name[a] + code[1];
//         }
//       result.push(obj)
//   }
//   return result
// }

//OR

function addValidationCode(users){
  var result = [];
    for(var i = 0; i < users.length; i++){
      var temp = users[i].name.split('')
      var join = users[i]['join date'].split('-')
      for(var j = 0; j < temp.length; j+=2){
        if(j+2 < temp.length){
          var temp2 = temp[j]
          temp[j] = temp[j+1]
          temp[j+1] = temp2
        }
      }

      var obj = {
        name: users[i].name,
        validationCode: temp.join('') + join.join('')
      }
      result.push(obj)
    }
  return result    
}

//Test case
console.log(addValidationCode([
  {
    name: 'Antonio',
    'join date': '09-08-2018'
  },
  {
    name: 'Banderaz',
    'join date': '10-08-2018'
  },
]));
/**
 Hasil Output
 [
  {
    name: 'Antonio',
    validationCode: 'nAotino09082018'
  },
  {
    name: 'Banderaz',
    validationCode: 'aBdnreza10082018'
  },
]
 */
console.log(addValidationCode([
  {
    name: 'Cecile',
    'join date': '01-02-2018'
  },
  {
    name: 'Dominique',
    'join date': '10-09-2018'
  },
]));
/**
 Hasil Output
 [
  {
    name: 'Cecile',
    validationCode: 'eCicel01022018'
  },
  {
    name: 'Dominique',
    validationCode: 'oDiminuqe10092018'
  },
]
 */
console.log(addValidationCode([]));
/**
 Hasil Output
 []
 */
