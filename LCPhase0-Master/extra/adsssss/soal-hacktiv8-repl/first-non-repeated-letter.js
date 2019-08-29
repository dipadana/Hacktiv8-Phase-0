function firstNonrepChar (str){

	var obj = {};
	for (var i = 0; i < str.length; i++) {
		// console.log(str[i])
		if(obj[str[i]]){
			obj[str[i]]++;
		} else {
			obj[str[i]] = 1;
		}
	}

// 	for (var j = 0; j < str.length; j++) {
// 		if(obj[str[j]] === 1){
// 			return str[j];
// 		} else {
// 			return -1
// 		}
// 	}

	for(var j in obj){
		// console.log(obj[j])
		if(obj[j] === 1){
			return j
		} else {
			return -1
		}
		// console.log(j)
	}
}

console.log(firstNonrepChar("pale waves"));
console.log(firstNonrepChar("wolf alice"));
console.log(firstNonrepChar("florence and the machine"));
console.log(firstNonrepChar("aaaaaaaaa"));
console.log(firstNonrepChar("caaaalll mmeee"));