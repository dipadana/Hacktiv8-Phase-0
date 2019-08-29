
// function uniqueInOrder (str) {

// 	// var result = [];
// 	// var obj = {};

// 	// for (var i = 0; i < str.length; i++) {
// 	// 	// console.log(str[i])
// 	// 	if(obj[str[i]] === undefined){
// 	// 		obj[str[i]] = [str[i]]
// 	// 	} else {
// 	// 		obj[str[i]].push(str[i])
// 	// 	}
// 	// }
// 	// return Object.keys(obj)

// 	// var result = [];
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]

// function uniqueInOrder (str) {
// 	var result = [];
// 	var obj = {};

// 	for (var i = 0; i < str.length; i++) {
// 		var count = obj[str[i]] || 0;

// 		if(count < 1){
// 			result.push(str[i]);
// 			obj[str[i]] = count + 1

// 		}
// 	}
// 	return result
// }

// console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
// console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
// console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]

var uniqueInOrder=function(iterable){

	var result = [];
	var str = "";

	for (var i = 0; i < iterable.length; i++) {
		// console.log(iterable[i])
		if(iterable[i] !== str){
			str = iterable[i];
			result.push(str)
		}
	}
	return result
}
console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A', 'B', 'C', 'D', 'A', 'B']
console.log(uniqueInOrder('ABBCcAD'));         // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([1,2,2,3,3]));       // [1,2,3]

// LONGEST CONSECUTIVE STRINGS

// function longestConsec(strarr, k) {

//   var str = "";
// 	var n = strarr.length; 

// 	if(n = 0 || k > n || k <= 0){
// 		return str
// 	}

// 	for (var i = 0; i < strarr.length; i++) {
// 		var currentStr = strarr.slice(i, k + i).join("");
// 		if(currentStr.length > str.length){
// 			str = currentStr
// 		}
// 	}
// 	return str
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); //"abigailtheta"
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); //"oocccffuucccjjjkkkjyyyeehh"
// console.log(longestConsec([], 3), "");
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)); //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)); //"wlwsasphmxxowiaxujylentrklctozmymu"
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)); //""

/*

1. bikin dulu variable string sama array
2. looping 2 kali trus itung length masing masuk yang paling panjang masukin ke dalam array
3. di sambung dan return haslunya


*/

// cara 2

// function longestConsec(strarr, k) {
//     if (k <= 0 || k > strarr.length) {
//         return "";
//     }

//     var answer = "";
//     for (var i = 0; i < strarr.length + 1 - k; i++) {
//         var str = "";
//         for (var j = i; j < i + k; j++) {
//             str += strarr[j];
//         }
//         if (str.length > answer.length) {
//             answer = str;
//         }
//     }
    
//     return answer;
// }

// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)); //"abigailtheta"
// console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)); //"oocccffuucccjjjkkkjyyyeehh"
// console.log(longestConsec([], 3), "");
// console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2)); //"wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2)); //"wlwsasphmxxowiaxujylentrklctozmymu"
// console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2), "");
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3)); // "ixoyx3452zzzzzzzzzzzz"
// console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15)); //""

// function removeSmallest(numbers) {

// 	var smallest = numbers[0];

// 	if(numbers.length === 0){
// 		return result
// 	} else {
// 		for (var i = 0; i < numbers.length; i++) {
// 			// console.log(numbers[i])
// 			if(numbers[i] < smallest){
// 				smallest = numbers[i];
// 				var indexSmallest = i;
// 			}
// 		}
// 	}

// 	numbers.splice(indexSmallest, 1);
// 	return numbers
// }

// console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4])); //[5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1])); //[2, 2, 2, 1]
// console.log(removeSmallest([])); //[]

// function removeSmallest(numbers) {

//   var min = Math.min.apply(null,numbers);
  
//   numbers.splice(numbers.indexOf(min),1);
//   return numbers;
// }
// console.log(removeSmallest([1, 2, 3, 4, 5])); //[2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4])); //[5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1])); //[2, 2, 2, 1]
// console.log(removeSmallest([])); //[]


