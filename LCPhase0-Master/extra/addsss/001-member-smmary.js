
/*
  ================
  GET MEMBER SUMMARY
  ================
  author: Muhammad Ramadiansyah
  description: Get member summary adalah sebuah fungsi untuk mendapatkan ringkasan informasi berdasarkan data-data
               seperti nama depan, nama belakang, dan umur masing-masing untuk pria dan wanita.
               fungsi ini akan mengembalikan sebuah object dengan atribut total member, rata-rata umur, 
               dan anggota yang paling tua dan muda dengan keterangan nama lengkap, umur, dan gender.
  
  rules:
  1. tidak boleh menggunakan built in function seperti sort, filter, index of, Math.max, Math.min dan sejenisnya
  2. asumsi anggota paling tua dan paling muda hanya 1 orang. Boleh memilih antara yang lebih dulu diinput
     atau yang terakhir diinput. Lihat contoh example 2 untuk lebih jelasnya.

  examples:
  1. diberikan data = {
    men: [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 27
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }],
    women: [{
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 19
    }]
  }
    maka output = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 27,
        gender: 'man'
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 19,
        gender: 'Woman'
      }
    }
  2. diberikan data = {
    men: [{
      first_name: 'Example',
      last_name: 'Contoh',
      age: 22
    }, {
      first_name: 'Some',
      last_name: 'Thing',
      age: 22
    }],
    women: [{
      first_name: 'Manusia',
      last_name: 'Biasa',
      age: 21
    }]
  }
    maka output = {
      total_member: 3,
      oldest_member: {
        full_name: 'Example Contoh',
        age: 22,
        gender: 'man'
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 21,
        gender: 'Woman'
      }
    }

    atau bisa juga 
     maka output = {
      total_member: 3,
      oldest_member: {
        full_name: 'Smoe Thing',
        age: 22,
        gender: 'man'
      },
      youngest_member: {
        full_name: 'Manusia Biasa',
        age: 21,
        gender: 'Woman'
      }
    }
*/

function getMemberSummary (member) {
  // JOIN MEN & WOMEN dalam 1 array
  var join = [];
  var arrayMen = member.men;
  for (var i=0; i<arrayMen.length; i++) {
      // console.log(arrayMen);
      arrayMen[i].gender = 'men' // tambah gender
      join.push(arrayMen[i])
  }
  var arrayWomen = member.women;
  for (var i=0; i<arrayWomen.length; i++) {
      arrayWomen[i].gender = 'women' // tambah gender
      join.push(arrayWomen[i])
  }
  // console.log(join);
  

  // UBAH DETAIL DATA JOIN -> bikin array baru, isinya sama, tp firstname+lastname digabung, 
  var newJoin = [];
  for (var j=0; j<join.length; j++) {
      var obj = {
          full_name: join[j].first_name + ' ' + join[j].last_name,
          age: join[j].age,
          gender: join[j].gender
      }
      newJoin.push(obj)
  }
  // console.log(newJoin);
  

  // RESULT 
  var finalObj = {
      total_member: 0,
      oldest_member: 'Belum ada data',
      youngest_member: 'Belum ada data',
      average_member_age: 0
  }

  if (newJoin.length === 0) {
      return finalObj;
  }
  else {
      var oldest = newJoin[0];
      var youngest = newJoin[0];
      var totalAge = 0;
      for (var m=0; m<newJoin.length; m++) {
          // AVERAGE
          totalAge += newJoin[m].age;
          // OLDEST:
          if (newJoin[m].age > oldest.age) {
              oldest = newJoin[m];
          }
          if (newJoin[m].age < youngest.age) {
              youngest = newJoin[m];
          }

      }
      finalObj.total_member = newJoin.length;
      finalObj.average_member_age = Math.round(totalAge / newJoin.length);
      finalObj.oldest_member = oldest;
      finalObj.youngest_member = youngest;
      
      return finalObj
  }

}


console.log(getMemberSummary({
men: [{
      first_name: 'Wika',
      last_name: 'Silo',
      age: 30
    }, {
      first_name: 'Dhani',
      last_name: 'Damara',
      age: 27
    }, {
      first_name: 'Fandy',
      last_name: 'Barestu',
      age: 18
  }],
women: [{
    first_name: 'Acha',
    last_name: 'Acha',
    age: 29
  }, {
    first_name: 'Zena',
    last_name: 'Villenia',
    age: 32
  }, {
    first_name: 'Annisa',
    last_name: 'Ayu',
    age: 21
  }]
}));
//output
/*
{
 total_member: 6,
 oldest_member: {
    full_name: 'Zena Villenia',
    age: 32,
    gender: 'man'
 },
 youngest_member: {
  full_name: 'Fandy Barestu',
  age: 18,
  gender: 'man'
 },
 average_member_age: 26
}
*/

console.log(getMemberSummary({
men: [{
  first_name: 'Rama',
  last_name: 'Diansyah',
  age: 20
}, {
  first_name: 'Malik',
  last_name: 'Adhi',
  age: 21
}],
women: [{
  first_name: 'Dita',
  last_name: 'Zakiah',
  age: 27
}]
}))

/*
total_member: 3,
oldest_member: {
    full_name: 'Dita Zakiah',
    age: 27,
    gender: 'woman'
 },
youngest_member: {
  full_name: 'Rama Diansyah',
  age: 20,
  gender: 'man'
 },
 average_member_age: 23
*/

console.log(getMemberSummary({
men: [],
women: [{
  first_name: 'Zena',
  last_name: 'Villenia',
  age: 20
}]
}))
/*
{ 
  total_member: 1,
  oldest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
  youngest_member: { full_name: 'Zena Villenia', age: 20, gender: 'woman' },
  average_member_age: 20 
}
*/

console.log(getMemberSummary({
men: [],
women: []
}))

/*
{ 
  total_member: 0,
  oldest_member: 'Belum ada data',
  youngest_member: 'Belum ada data',
  average_member_age: 0 
}
*/


