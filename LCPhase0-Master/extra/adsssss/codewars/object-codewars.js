
function areEqual(value1, value2) {

	for(var i in value1){
		return Object.is(value1[i], value2[i])
	}
}

 console.log(areEqual([{a:3},{b:4}],[{a:'3'},{b:'4'}])); //false
 console.log(areEqual({a:[2,3],b:[4]},{b:[4],a:[2,3]})); //true
 console.log(areEqual({adam:3, laura:4},{laura:4, adam:3})); //true
 console.log(areEqual({adam:3, laura:4, maisie:2},{adam:3, laura:4})); //false
 console.log(areEqual({a:3},{b:4},{b:3},{a:4})); //false