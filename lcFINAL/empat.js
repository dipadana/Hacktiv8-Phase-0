/**
 * =================
 * Steam Summer Sale
 * =================
 * 
 * [Description]
 * Steam sedang diskon besar-besaran untuk beberapa nama game besar, berikut datanya:
 * | No  | Title                            | Short Key | Price  | Genre                |
 * | --- | -------------------------------- | --------- | ------ | -------------------- |
 * | 1   | Grand Theft Auto V               | gta5      | 290000 | action               |
 * | 2   | Assassin's Creed Odyssey         | aco       | 500000 | rpg                  |
 * | 3   | Counter Strike: Global Offensive | csgo      | 120000 | first-person shooter |
 * | 4   | Playerunknown's Battlegrounds    | pubg      | 210000 | first-person shooter |
 * | 5   | Monster Hunter: World            | mhw       | 250000 | action               |
 * 
 * [Instruction]
 * 1. buat sebuah function yang menerima array of strings yang valuenya berupa short-key dari game yang dibeli
 * 2. function terssebut akan mereturn sebuah object yang berisikan data yang dikelompokkan berdasarkan genre-nya
 *    dan total harga yang harus dibayar user.
 * 
 * [Example]
 * @input = ['gta5']
 * @output = {
 *   games: [
 *     {
 *       title: 'Grand Theft Auto V',
 *       genre: 'action'
 *     }
 *   ],
 *   subTotal: 290000
 * }
 * 
 * [Rules]
 * 1. Hanya boleh menggunakan built-in function: .push
 * 2. Dilarang menggunakan regex dan built-in function lain.
 */

  var data = {
    gta5 : {
      title : 'Grand Theft Auto V',
      shortKey : 'gta5',
      price : 290000,
      genre : 'action'
    },
    aco : {
      title : "Assassin's Creed Odyssey",
      shortKey : 'aco',
      price : 500000,
      genre : 'rpg'
    },
    csgo : {
      title : 'Counter Strike: Global Offensive',
      shortKey : 'csgo',
      price : 120000,
      genre : 'first-person shooter '
    },
    pubg : {
      title : "Playerunknown's Battlegrounds",
      shortKey : 'pubg',
      price : 210000,
      genre : 'first-person shooter '
    },
    mhw : {
      title : 'Monster Hunter: World ',
      shortKey : 'mhw',
      price : 250000,
      genre : 'action'
    },
  }

function steam(arr) {
  output = {
    games : [],
    subTotal :0
  }

  for(var i = 0; i < arr.length; i++){
    if(arr[i] == data[arr[i]].shortKey){
      output.games.push({
        title : data[arr[i]].title,
        genre: data[arr[i]].genre
      })
      output.subTotal += data[arr[i]].price
    }
  }
  return output;
}




// console.log(steam([]))
// {
//   games: [],
//   subTotal: 0
// }

console.log(steam(['gta5', 'aco']))
// {
//   games: [
//     {
//       title: 'Grand Theft Auto',
//       genre: 'action'
//     },
//     {
//       title: 'Assassins Creed Odyssey',
//       genre: 'rpg'
//     },
//   ],
//   subTotal: 790000
// }

console.log(steam(['aco', 'pubg', 'mhw']))
// {
//   games:
//     [
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 960000
// }

console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))

// {
//   games:
//     [
//       {
//         title: 'Grand Theft Auto V',
//         genre: 'action'
//       },
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Counter Strike: Global Offensive',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 1370000
// }