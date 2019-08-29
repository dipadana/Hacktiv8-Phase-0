// Hapus Simbol
function hapusSimbol(str) {
    return str.match(/[a-z0-9]+/gi).join('');
}

// function hapusSimbol(str, str2 = '') {
//   var replace = '['+ str2 +']'
//   var re = new RegExp(replace,"gi");
//   return re.test(str);
// }

  // TEST CASES
  console.log(hapusSimbol('test%$4aa')); // test4aa
  console.log(hapusSimbol('rkqodlw', 'world'))
  console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
  console.log(hapusSimbol('ma@#k!an~')); // makan
  console.log(hapusSimbol('coding')); // coding
  console.log(hapusSimbol('1+3-5*2=100')); // 1352100