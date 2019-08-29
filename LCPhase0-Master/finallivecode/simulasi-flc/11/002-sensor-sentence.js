/*
================
SENSOR SENTENCE
================
description: Sebuah fungsi yang akan mendeteksi apakah kalimat tersebut merupakan kalimat yang
tidak baik dan akan mengembalikan nilai kalimat yang telah di sensor

rules:
1. Wajib menggunakan Pseudocode/ Algoritma
2. tidak boleh menggunakan built in function .filter(), .map(), .split(), .findIndex(), indexOf(), .join()
3. tidak boleh menggunakan REGEX, seperti .match, .replace


examples:
JIKA INPUT KALIMAT = 'HAHAHA PAYAH LOOO' dan INPUT SENSOR = 'PAYAH'
MAKA OUTPUT = 'HAHAHA ***** LOOO'

PSEUDOCODE :
STORE "temp" with the value of empty Array
STORE "str" with the value of splitted sentence

  FOR LOOP index 0 to length of sentence
                    
*/

function sensorSentence ( sentence, words ) {}



  console.log(sensorSentence('Hey you are a murderer', 'murderer')) // Hey you are a ********

  console.log(sensorSentence('I will kill you later, i swear', 'kill')) // I will **** you later, i swear

  console.log(sensorSentence("Oh my god, holy cow! i can't believe it", "cow!")) // Oh my god, holy **** i can't believe it

  console.log(sensorSentence("Aku ingin pindah ke meikartu", "meikartu")) // Aku ingin pindah ke ********

  console.log(sensorSentence('HAHA HEHE HIHI HUHU HOHO', 'WEY')) // 'HAHA HEHE HIHI HUHU HOHO'

  console.log(sensorSentence('', '')) // ''








  // function sensorSentence ( sentence, words ) {

  //   var temp = [];
  //   var str = "";
  
  //   for(var i = 0; i < sentence.length; i++){
  //     // console.log(sentence[i])
  //     if(sentence[i] === " "){
  //       temp.push(str);
  //       str = "";
  //     } else {
  //       str += sentence[i]
  //     }
  //   }
  //   temp.push(str)
  
  //   // console.log(temp)
  //   var sensor = "";
  //   for(var j = 0; j < words.length; j++){
  //     sensor += "*";
  //   }
  //   // return sensor
  //   var result = "";
  //   for(var k = 0; k < temp.length; k++){
  //     if(temp[k] === words){
  //       temp[k] = sensor
  //     }
  //   }
  
  //   for(var a = 0; a < temp.length; a++){
  //     result += temp[a] + " "
  //   }
  //   return result
  // }