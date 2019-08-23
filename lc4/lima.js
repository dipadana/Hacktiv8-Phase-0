/**
 * ///////////
 * User Weapon
 * ///////////
 * Function userWeapon adalah sebuah function yang berfungsi merubah senjata dari setiap karakter.
 * Function ini menerima parameter yaitu:
 *  - user = tipe data object, merupakan informasi dari user
 *  - weapon = tipe data string, merupakan senjata yang akan dipakai user
 * Function ini akan mengembalikan tipe data string yang berisi informasi perubahan senjata
 * 
 * [EXAMPLE]
 * Input:
 * - User: {
 *    name: 'yogs',
 *    weapon: 'redKnife',
 *    job: 'swordman',
 *    attack: 700
 *  }
 * - newWeapon: blackKnife
 * Proses:
 * - Apabila heroes tersebut dapat menggunakan weapon yang diminta maka akan diubah senjata
 *   dan menyesuaikan dengan output nilai yang baru. (700 - weaponLama(100) + weapon baru (300)) = 900
 * Output:
 * yogs menggunakan senjata blackKnife attack menjadi 900
 * 
 * [RULES]
 * 1. Dilarang menggunakan built in function kecuali .push() dan .unshift()
 * 2. Asumsi senjata awal pemain selalu ada dan sesuai
 * 3. Apabila ada karakter yang berusaha memakai senjata yang tidak bisa dipakai job tersebut
 *    maka kembalikan Invalid Weapon
 */

/**
 * DAFTAR WEAPONS
 * 
 * | Name           | Type    | Attack |
 * | -------------- | ------- | ------ |
 * | redKnife       | knife   | 100    |
 * | blackKnife     | knife   | 300    |
 * | crimsonSword   | katana  | 800    |
 * | moonLightSword | katana  | 400    |
 * | starKunai      | kunai   | 80     |
 * | huumaShuriken  | kunai   | 340    |
 * | emptyBracer    | knuckle | 20     |
 * | brokenArms     | knuckle | 40     |
 * 
 * 
 * DAFTAR HEROES
 * 
 * | Job      | Weapon Types         |
 * | -------- | -------------------- |
 * | swordman | knife, katana        |
 * | ninja    | knife, kunai, katana |
 * | samurai  | knife, katana        |
 * | monk     | knuckle              |
*/

function userWeapon(user, weapon) {
  var output = '';

  var daftarWeapon = [
    {
      name : 'redKnife',
      type : 'knife',
      attack : 100
    },
    {
      name : 'blackKnife',
      type : 'knife',
      attack : 300
    },
    {
      name : 'crimsonSword',
      type : 'katana',
      attack : 800
    },
    {
      name : 'moonLightSword',
      type : 'katana',
      attack : 400
    },
    {
      name : 'starKunai',
      type : 'kunai',
      attack : 80
    },
    {
      name : 'huumaShuriken',
      type : 'kunai',
      attack : 340
    },
    {
      name :  'emptyBracer',
      type : 'knucle',
      attack : 20
    },
    {
      name : 'brokenArms',
      type : 'knife',
      attack : 40
    }
  ]
  var daftarHeroes = [
    {
      job : 'swordman',
      weaponType : ['knife', 'katana']
    },
    {
      job : 'ninja',
      weaponType : ['knife', 'katana', 'kunai']
    },
    {
      job : 'samurai',
      weaponType : ['knife', 'katana']
    },
    {
      job : 'monk',
      weaponType : ['knuckle']
    }
  ]

  for(var i = 0; i < daftarHeroes.length; i++){
    if(user.job == daftarHeroes[i].job){

      for(var j = 0; j < daftarWeapon.length; j++){
        for(var k = 0; k < daftarHeroes[i].weaponType.length; k++){

          if(weapon == daftarWeapon[j].name && daftarWeapon[j].type == daftarHeroes[i].weaponType[k]){
            console.log(daftarWeapon[j])
            console.log(user.weapon)
            for(var l = 0; l < daftarWeapon.length; l++){

              if(user.weapon == daftarWeapon[l].name){
                console.log(daftarWeapon[l].attack)
                user.attack = user.attack - daftarWeapon[l].attack + daftarWeapon[j].attack;
                return user.name + ' menggunakan senjata ' + daftarWeapon[j].name + ' attack menjadi ' + user.attack;
              }

            }

            
          }

        }
      }
      
    }
  }

  return 'Invalid Weapon';
}


var yogs = {
  name: 'yogs',
  job: 'swordman',
  weapon: 'redKnife',
  attack: 700
}
console.log(userWeapon(yogs, 'blackKnife'))
// yogs menggunakan senjata blackKnife attack menjadi 900


var arms = {
  name: 'arms',
  job: 'monk',
  weapon: 'emptyBracer',
  attack: 3000
}
console.log(userWeapon(arms, 'crimsonSword'))
// Invalid weapon


var name = {
  name: 'yuss',
  job: 'ninja',
  weapon: 'huumaShuriken',
  attack: 900
}
console.log(userWeapon(name, 'starKunai'))
// yuss menggunakan senjata starKunai attack menjadi 640