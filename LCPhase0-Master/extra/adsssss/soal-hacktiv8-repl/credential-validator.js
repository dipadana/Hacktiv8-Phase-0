/*
===============================================
Credential Validator (Anchor with Rocket Score)
===============================================

Nama:________

[INSTRUKSI]

DILARANG MENGGUNAKAN Regex dan Match untuk soal ini!


function credentialValidator akan menerima tiga parameter berupa string, yakni username, email, dan password. Buatlah validasi tiga parameter tersebut dengan syarat berikut:

1. [ANCHOR] Username harus memiliki panjang minimal 4 karakter dan maksimal 20 karakter. Username tidak boleh mengandung simbol '*', '@', '#', '$', '%', '^', '&', dan '*'.

2. [ANCHOR] Password harus memiliki panjang minimal 5 karakter, dan harus mengandung kombinasi minimal 1 angka dan 1 huruf.

3. [ROCKET] Email harus memiliki panjang minimal 6 karakter, harus memiliki hanya satu simbol '@' dan memiliki nama email di sisi kiri simbol '@' dan memiliki domain di sisi kanan simbol '@'. Format: [NAMA EMAIL SISI KIRI]@[NAMA EMAIL].[DOMAIN].  domain harus memiliki hanya satu simbol '.' dimana sisi kiri maksimal 6 karakter, dan sisi kanan maksimal 3 karakter.

function akan me-return nilai true jika semua pengecekan terpenuhi, dan false jika minimal satu syarat tidak terpenuhi. Tambahan score bonus rocket apabila sukses melakukan validasi email.


[CONTOH]

input:
  - username: 'adhywiranata'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'
output: true

input: 
  - username: 'adh'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username dibawah 4 karakter

input: 
  - username: 'adhy test 123 testing 321 test 123 321 test'
  - password: 'test123'
  - email: 'adhywiranata@coding.com'

output: false, karena username melebihi 20 karakter

input: erwin@nice.com
input: 
  - username: 'erwin'
  - password: 'testing'
  - email: 'erwin@nice.com'

output: false, karena password tidak mengandung 1 angka sama sekali


*/

function credentialValidator(username, password, email) {

  var symbol = ['*', '@', '#', '$', '%', '^', '&',];

  // console.log(username.length)

  // if(username.length <= 20){
  //   return true
  // } else {
  //   return false
  // }

  for (var i = 0; i < password.length; i++) {
    // console.log(password[i])
    for (var j = 0; j < symbol.length; j++) {
      // console.log(symbol[j])
    }
  }
}

console.log(
  credentialValidator('adhywiranata', 'test123', 'adhywiranata@coding.com')
);
console.log(
  credentialValidator(
    'adhy test 123 testing 321 test 123 321 test',
    'test123',
    'adhywiranata@coding.com'
  )
);
console.log(credentialValidator('erwin', 'testing', 'erwin@nice.com'));
