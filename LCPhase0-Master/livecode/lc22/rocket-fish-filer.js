/*
==================================
Array Mastery: Fish Filter
==================================
[INSTRUKSI]
Fish Filter merupakan fungsi untuk menyaring data kumpulan spesies laut dan akan mengembalikan spesies
yang berisi kumpulan ikan dalam bentuk string
[CONTOH]
input: ['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng']
output: ikan indosiar, dan ikan bandeng
[RULE]
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan .map, .splice, .slice, .filter, dan .reduce!
*/

function fishFilter(students) {
  var result = '';
  
  for(var i = 0; i < students.length; i++){
    for(var j = 0; j < students[i].length; j++){
      if( i === students.length-1){
        if(students[i][0] === 'i' && students[i][1] === 'k' && students[i][2] === 'a' && students[i][3] === 'n'){
          result += ' dan ' + students[i];
          break;
        }
      }else{
        if(students[i][0] === 'i' && students[i][1] === 'k' && students[i][2] === 'a' && students[i][3] === 'n'){
          result += students[i] + ', ';
          break;
        }
      }

      if(students[i][0] !== 'i'){
        
      }
    }
  }
  return result
}

//OR

function fishFilter(students) {
  var result = '';
  for(var i = 0; i < students.length; i++){
    if(students[i].split('ikan').length === 2){
      if(i < students.length-1){
        result += students[i] + ' dan '
      }else{
        result += students[i]
      }
    }
  }
  if(result.length === 0){
    return 'tidak ada data'
  }
  return result
}

// TEST CASES
console.log(fishFilter(['ikan indosiar', 'gurita', 'cumi-cumi', 'ikan bandeng'])); // ikan indosiar, dan ikan bandeng
console.log(fishFilter(['gurita', 'ikan kerapu', 'ikan hiu'])); // ikan kerapu, dan Ikan hiu
console.log(fishFilter(['bintang laut', 'spongebob', 'patrick', 'ikan paus', 'ikan hiu', 'ikan tongkol'])); // ikan paus, ikan hiu, dan ikan tongkol
// console.log(fishFilter(['gurita', 'udang'])); // tidak ada data