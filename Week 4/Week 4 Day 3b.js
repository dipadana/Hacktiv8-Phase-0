// Mengurutkan Abjad
function urutkanAbjad(str) {
    var temp = [];
    for(var i = 0; i < str.length; i++){
        temp[i] = str[i];
    }
    return temp.sort().join('')
}

  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'