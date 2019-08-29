/**
  Kompetensi: Loopings

  Buatlah sebuah proses beberapa penghitungan dengan menggunakan looping (boleh dengan while atau for)
  Disediakan variable height dan akan membuat sebuah pola tangga menampilkan x ke samping di baris ganjil,
  dan o di baris genap.
  Buatlah sebuah tangga string dengan pola berikut:

  Contoh 1 (height = 3)
  ---------------------
  tampilan:
  x
  oo
  xxx

  Contoh 2 (height = 6)
  ----------------------
  tampilan:
  x
  oo
  xxx
  oooo
  xxxxx
  oooooo

  WAJIB MENGGUNAKAN LOOPING
**/

var height = 5 //isi dengan nilai tangga

//your code here
for(var i = 0; i < height; i++){
    var result = '';
    for(var j = 0; j <= i; j++){
        if(i%2 === 0){
            result += 'x'
        }else{
            result += 'o'
        }
    }
    console.log(result)
}

//jika dalam bentuk function
function star(){

    var result = '';
    for(var i = 0; i < height; i++){
        for(var j = 0; j <= i; j++){
            if(i%2 === 0){
                result += 'x'
            }else{
                result += 'o'
            }
        }
        result += '\n'
    }
    return result
}
console.log(star(5))
