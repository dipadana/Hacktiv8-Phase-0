/*
  ================
  Maze Runner
  ================
  [INSTRUCTIONS]
  Maze Runner adalah suatu function yang dibuat untuk mengetahui, siapa yang
  akan memenangkan perlombaan maze runner.
  [EXAMPLE]
  var persons = ['Andi', 'Betty', 'Ryan', 'Danang'];
  var tracks = ['AABBAABB', 'ABAB', 'BBBBBBAA', 'AAAB'];
  pemenangnya apabila jumlah A dan B atau sebaliknya berupa perbandingan 1 : 3
  Ryan => 2 A dan 6 B => 1 : 3
  Danang => 3 A dan 1 B => 3 : 1
  output yang diharapkan adalah ['Ryan', 'Danang'];
  [RULE]
  - Tidak boleh menggunakan built in function selain .push() dan .unshift()
*/ 

function mazeRunner(persons, tracks){
	var output = [];
	for(var i = 0; i < tracks.length; i++){
		var A = 0;
		var B = 0;
		for(var j = 0; j < tracks[i].length; j++){
			tracks[i][j] == 'A'? A++ : B++;
		}
		if((A*B)%3 == 0 && A != 0 && B != 0){
			output.push(persons[i])
		}
	}
	return output.length == 0 ? 'Tidak ada pemenangnya' : output; 
}

// TEST CASES
let persons = ['Andi', 'Betty', 'Ryan', 'Danang']
let tracks = ['AABBAABB', 'ABAB', 'BBBBBBAA', 'AAAB']
console.log(mazeRunner(persons, tracks))
// [ 'Ryan', 'Danang' ]
let persons2 = ['Andi', 'Betty']
let tracks2 = ['AAB', '']
console.log(mazeRunner(persons2, tracks2))
// Tidak ada pemenangnya
let persons3 = ['Andi', 'Betty']
let tracks3 = ['AAAB', '']
console.log(mazeRunner(persons3, tracks3))
// [ 'Andi' ]