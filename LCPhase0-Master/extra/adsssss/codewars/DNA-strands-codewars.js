
// function DNAStrand(dna){

// 	var str = "";
// 	for (var i = 0; i < dna.length; i++) {
// 		// console.log(dna[i])
// 		if(dna[i] === "A"){
// 			str += "T"
// 		} else if (dna[i] === "T"){
// 			str += "A"
// 		} else if (dna[i] === "G"){
// 			str += "C"
// 		} else if (dna[i] === "C"){
// 			str += "G"
// 		}
// 	}
// 	return str
// }

// console.log(DNAStrand("AAAA")); // "TTT"
// console.log(DNAStrand("ATTGC")); // "TAACG"
// console.log(DNAStrand("GTAT"));// "CATA"

// REMOVE VOWELS

// function disemvowel(str) {

// 	return str.replace(/[aiueo]/gi, "");
// }

// console.log(disemvowel("This website is for losers LOL!"));// "Ths wbst s fr lsrs LL!"

// COUNTING POPULATION OF A CITY

// function nbYear(p0, percent, aug, p) {

// 	var pop = 0

// 	if (p0 >= p){
//         return 0
// 	} else {
//         // count += 1
//         pop = p0 + p0 * (percent/100) + aug
//     }
//     return pop
// }

// console.log(nbYear(1500, 5, 100, 5000)); //15
// console.log(nbYear(1500000, 2.5, 10000, 2000000)); //10
// console.log(nbYear(1500000, 0.25, 1000, 2000000)); // 94

// CATEGORIES SENIOR

// function openOrSenior(data){
  
//   var result = [];
  
//   for(var i = 0; i < data.length; i++){
// //     console.log(data[i][0])
//     if(data[i][0] < 55 || data[i][1] <= 7){
//       result.push("Open")
//     } else {
//       result.push("Senior")
//     }
//   }
//   return result
// }

// console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); //['Open', 'Senior', 'Open', 'Senior']
// console.log(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])); //['Open', 'Open', 'Open', 'Open']
// console.log(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]])); //['Senior', 'Open', 'Open', 'Open']

// ARRAY MAPPER (dapet dari repl orang hehe, sama2 dari hacktiv8 juga)
/*
buat variable 'newArray' dengan tipe data array
baca 'targetArr' dari kiri ke kanan sebanyak data dalam array
  untuk setiap targetArr[data] yang berulang 'ditambahkan' operator 'ditambahkan' effect, lalu hasilnya di 'push' ke dalam 'newArray'
kembalikan nilai 'newArray' */

// function arrayMapper(targetArr, operator, effect) {

// 	var result = [];

// 	for (var i = 0; i < targetArr.length; i++) {
// 		// console.log(targetArr[i])
// 		if(operator === "-"){
// 			result.push(targetArr[i] - effect)
// 		} else if (operator === "+"){
// 			result.push(targetArr[i]+effect)
// 		} else if (operator === "/"){
// 			result.push(targetArr[i]/effect)
// 		}
// 	}
//   return result
// }

// console.log(arrayMapper([1, 2, 3, 4, 5], '-', 3)); // [-2, -1, 0, 1, 2]
// console.log(arrayMapper([1, 5, 3, 4], '+', 1)); // [2, 6, 4, 5]
// console.log(arrayMapper([8, 4, 2, 10], '/', 2)); // [4, 2, 1, 5]

// function iqTest(numbers){

// 	var str = numbers.split(" ");
// 	var odd = 0;
// 	var even = 0;

// 	for (var i = 0; i < str.length; i++) {
// 		// console.log(str[i])
// 		// console.log(Number(str[i]))
// 		// var num = Number(str[i]);
// 		if(str[i]%2 === 0){
// 			even++
// 		} else if (str[i]%2 === 1){
// 			odd++
// 		}
// 	}

// 	for (var j = 0; j < str.length; j++) {
// 		// console.log(str[i])
// 		if(even === 1){
// 			if(str[j]%2 === 0){
// 				return j+1
// 			}
// 		} else {
// 			if(str[j]%2 !== 0){
// 				return j+1
// 			}
// 		}
// 	}
// }

// console.log(iqTest("2 4 7 8 10"));//3
// console.log(iqTest("1 2 2")); //1

// SORT NUMBER DESCENDING

// CARA 1
// function descendingOrder(n){

// 	var str = String(n);
// 	var sorted = "";

// 	for (var i = str.length - 1; i >= 0; i--) {
// 		// console.log(str[i])
// 		sorted += str[i];
// 	}
// 	return sorted;
// }

// console.log(descendingOrder(0)); //0
// console.log(descendingOrder(1)); //1
// console.log(descendingOrder(123456789)); //987654321

// CARA 2
// function descendingOrder(n){

// 	var str = String(n).split("").sort(function (a, b) { return b - a; }).join("")
// 	return str
// }

// console.log(descendingOrder(0)); //0
// console.log(descendingOrder(1)); //1
// console.log(descendingOrder(123456789)); //987654321

//DELETING THE SAME NUMBERS WITH LIMITS
// cara 1:
// function deleteNth(arr,n){

// 	var result = {}
// 	var data = []

// 	for (var i = 0; i < arr.length; i++) {
// 		// console.log(arr[i])

// 		if(result[arr[i]] === undefined){
// 			result[arr[i]] = 1
// 		} else if (result[arr[i]] + 1 <= n){
// 			result[arr[i]]++
// 		}
// 	}

//   Object.keys(result).forEach(function(key){
//     for(i=0; i<result[key]; i++){
//       data.push(Number(key));
//     }
//   });
//   return data;
// }

// console.log(deleteNth([20,37,20,21], 1)); //[20,37,21]
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]

// cara 2:

// function deleteNth(arr,n){

// 	var result = [];
// 	var obj = {};

// 	for (var i = 0; i < arr.length; i++) {
// 		var count = obj[arr[i]] || 0;

// 		if(count < n){
// 			result.push(arr[i]);
// 			obj[arr[i]] = count + 1

// 		}
// 	}
// 	return result
// }

// console.log(deleteNth([20,37,20,21], 1)); //[20,37,21]
// console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)); //[1, 1, 3, 3, 7, 2, 2, 2]

// TAKE A TEN MINUTE WALK

function isValidWalk(walk) {

 var countN = 0;
  var countS = 0;
  var countW = 0;
  var countE = 0;
  
  
    for(var i = 0; i < walk.length; i++){
//     console.log(walk[i])
      if(walk[i] === "n"){
        countN += 1;
      } else if (walk[i] === "s"){
        countS += 1;
      } else if (walk[i] === "w"){
        countW += 1
      } else if (walk[i] === "e"){
        countE += 1
      }
    }
  
  if(walk.length !== 10){
    return false;
  } else if(countN === countS && countW === countE){
    return true;
  }
}

//some test cases for you...
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); //'should return true'
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));//'should return false'
console.log(isValidWalk(['w'])); //'should return false'
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); //'should return false'












