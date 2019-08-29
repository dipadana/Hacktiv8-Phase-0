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

    var obj = {};

    for(var i = 0; i < data.length; i++){
        // console.log(data[i])
        if(obj[data[i].pertandingan] === undefined){
            obj[data[i].pertandingan] = {};
            obj[data[i].pertandingan].pertandingan = data[i].pertandingan,
            obj[data[i].pertandingan].tribun = {},
            obj[data[i].pertandingan].tribun[data[i].lokasi] = data[i].nama
        }

        // var name = false
        if(data[i].pertandingan === data[i].pertandingan){
            // console.log("ini yang udh masuk duluan " + data[i].nama)
            if(obj[data[i].pertandingan].tribun[data[i].lokasi] === undefined){
                obj[data[i].pertandingan].tribun[data[i].lokasi] = data[i].nama + " | "
                // continue
            } else {
                // console.log("ini yang belum masuk " + data[i].nama) //ini dodo sama adi kenapa masuk yallaaaahhh
                obj[data[i].pertandingan].tribun[data[i].lokasi] += data[i].nama + " | "
            }
        }
    }
    
    var result = Object.values(obj)
    
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

// function tiketPertandingan(data){

//   var obj = {};

//   for(var i = 0; i < data.length; i++){
//     // console.log(data[i])
//     if(obj[data[i].pertandingan] === undefined){
//       obj[data[i].pertandingan] = {}
//       obj[data[i].pertandingan] = []
//     }
//   }
//   console.log(obj)
// }

// console.log(tiketPertandingan(input));