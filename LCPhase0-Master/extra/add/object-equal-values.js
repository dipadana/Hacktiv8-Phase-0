function areEqual(value1, value2) {

	for(var i in value1){
		var indexValue = value1[i];
	}

	for(var j in value2){
		// console.log(value2[j])
		var indexValue2 = value2[j];
	}

	// console.log(typeof(indexValue))
	if(typeof(indexValue) === "number" || typeof(indexValue2) === "number"){
		console.log("yes ", indexValue2)
	}
}

console.log(areEqual([{a:3},{b:4}],[{a:'3'},{b:'4'}])); //false
console.log(areEqual({a:[2,3],b:[4]},{b:[4],a:[2,3]})); //true
console.log(areEqual({adam:3, laura:4},{laura:4, adam:3})); //true
console.log(areEqual({adam:3, laura:4, maisie:2},{adam:3, laura:4})); //false
console.log(areEqual({a:3},{b:4},{b:3},{a:4})); //false