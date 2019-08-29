function numberLetters (str) {
  var tampung=''
//   1 = i
// 4 = a
// 3 = e
// 7 = u
// 0 = o
   for( var i=0; i<str.length;i++){
     if(str[i]=='1'){
       tampung+="i"
     }else if(str[i]=='4'){
       tampung+= 'a'
     }else if(str[i]=='3'){
       tampung+= 'e'
     }else if(str[i]=='7'){
       tampung+= 'u'
     }else if(str[i]=='0'){
       tampung+= 'o'
     }else{
       tampung+=str[i]
     }
   }return tampung
}

// Test cases
console.log(numberLetters('d1m1tr1w4hy7d1p7tr4')); // dimitriwahyudiputra
console.log(numberLetters('s3rg31dr4g7n0v')); // sergeidragunov
console.log(numberLetters('j1nk4z4m4')); // jinkazama
console.log(numberLetters('s7m3t4l')); // sumetal
console.log(numberLetters('m04m3t4l')); // moametal
console.log(numberLetters('')); //