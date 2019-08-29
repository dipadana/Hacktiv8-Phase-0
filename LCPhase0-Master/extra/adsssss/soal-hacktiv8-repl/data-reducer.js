function dataReducer(data) {

	var result = [];
	var alph = "abcdefghijklmnopqrstuvwxyz";
	for (var i = 0; i < data.length; i++) {
		for (var j = 0; j < alph.length; j++) {
			if(alph[j] == data[i]){
				result.push(data[i])
			}
		}
	}
	console.log(result)
  
}

console.log(dataReducer('abcdxefgh5wi')); // 'x,5,w'
console.log(dataReducer('opqrstu')); // ''
console.log(dataReducer('acdefghij')); // 'c,d,e,f,g,h,i,j'
console.log(dataReducer('testu')); // 'e,s,t'
