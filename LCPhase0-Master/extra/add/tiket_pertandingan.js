
var input = [
  {
    pertandingan: 'indonesia vs philipin',
    nama: 'adi',
    lokasi: 'tribun barat'
  },
  {
    pertandingan: 'indonesia vs philipin',
    nama: 'budi',
    lokasi: 'tribun timur'
  },
  {
    pertandingan: 'malaysia vs singapura',
    nama: 'dodo',
    lokasi: 'tribun barat'
  },
  {
    pertandingan: 'malaysia vs singapura',
    nama: 'edi',
    lokasi: 'tribun timur'
  },
  {
    pertandingan: 'malaysia vs singapura',
    nama: 'fajar',
    lokasi: 'tribun barat'
  },
  {
    pertandingan: 'indonesia vs philipin',
    nama: 'cici',
    lokasi: 'tribun timur'
  }
];

/**
[
  {
    pertandingan:  'indonesia vs philipin',
    tribun: 
       {
         'tribun barat' : 'adi |',
         'tribun timur': 'budi | cici |'
       } 
  },
  {
    pertandingan:  'malaysia vs singapura',
    tribun:
       {
         'tribun barat': 'dodo | fajar |',
         'tribun timur': 'edi |'
       } 
  }
])
*/

function tiketPertandingan(data){

  var result = [];

  for(var i = 0; i < data.length; i++){
    // console.log(data[i])
    var obj = {};
    if(result.length === 0){
      obj.pertandingan = data[i].pertandingan;
      obj.tribun = {};
      obj.tribun[data[i].lokasi] = data[i].nama;
      result.push(obj)
    } else {
      // console.log(data[i].nama)
      var same = false // kalau ke double
      for(var j = 0; j < result.length; j++){ // semua selain adi karena adi udh masuk ke yang object pertama
        // console.log(result[j])
        if(result[j].pertandingan === data[i].pertandingan){
          if(result[j].tribun[data[i].lokasi] === undefined){
            result[j].tribun[data[i].lokasi] = data[i].nama + " | "
          } else {
            // console.log(data[i].nama)
            result[j].tribun[data[i].lokasi] += data[i].nama + " | " //fajar , cici
          }
          same = true;
        }
      }
    // console.log(data[i].nama)
      if(same === false){ //jika tidak sama maka melakukan pembentukan object lagi
        obj.pertandingan = data[i].pertandingan;
        obj.tribun = {};
        obj.tribun[data[i].lokasi] = data[i].nama + " | ";
        result.push(obj)
       }
    }
  }
  return result
}

console.log(tiketPertandingan(input));

//   {
//     pertandingan:  'indonesia vs philipin',
//     tribun: 
//        {
//          'tribun barat' : 'adi |',
//          'tribun timur': 'budi | cici |'
//        } 
//   },
//   {
//     pertandingan:  'malaysia vs singapura',
//     tribun:
//        {
//          'tribun barat': 'dodo | fajar |',
//          'tribun timur': 'edi |'
//        } 
//   }


// cara 1: dari kak awtian

  // var result = [];

  // var objResult = {}

  // for (var i = 0; i< data.length; i++) {
  //   if (objResult[data[i].pertandingan] === undefined) {
  //     objResult[data[i].pertandingan] = 
  //     {
  //       pertandingan:  data[i].pertandingan,
  //       tribun: 
  //      {
  //        'tribun barat' : '',
  //        'tribun timur': ''
  //      }}
  //   }

  //   if (data[i].lokasi === 'tribun barat') {
  //     objResult[data[i].pertandingan].tribun['tribun barat'] += data[i].nama + ' | '
  //   } else if (data[i].lokasi === 'tribun timur') {
  //      objResult[data[i].pertandingan].tribun['tribun timur'] += data[i].nama + ' | '
  //   }

  //   // console.log(objResult)

  //   result.push(objResult);
  // }

  //   return result
