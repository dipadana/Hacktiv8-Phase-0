function groupAnimals(animals) {
	animals.sort();
	var i = 0;
	var j = 0;
	var temp = [];
	var hasil = [];
	for( i = 0; i < animals.length; i++){
		if(i != animals.length-1){
			if(animals[i][0] == animals[i+1][0]){
				temp.push(animals[i])
				hasil[j] = temp
			}
			else{
				temp.push(animals[i])
				hasil[j] = temp
				j++;
				temp = [];
			}
		}
		else{
			temp.push(animals[i])
			hasil[j] = temp
		}
	}
	return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


console.log(groupAnimals(['anjing', 'ngegat', 'nyamuk', 'burung', 'badak', 'macan', 'singa' ]));
// [ [ 'anjing' ], [ 'badak', 'burung' ], [ 'macan' ], [ 'ngegat', 'nyamuk' ], [ 'singa' ] ]