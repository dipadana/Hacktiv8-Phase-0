
function chooseBestSum(t, k, ls) {

	var arr = ls.sort();

	if(arr.length === 1){
		return null
	}

}
       
var ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts)); //163
 	ts = [50];
console.log(chooseBestSum(163, 3, ts)); //null
    ts = [91, 74, 73, 85, 73, 81, 87];
console.log(chooseBestSum(230, 3, ts)); //228

/*
soal : John and Mary want to travel between a few towns A, B, C ... 
Mary has on a sheet of paper a list of distances between these towns. 
ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible

====================================================

Example:

With list ls and 3 towns to visit they can make a choice between: 
[50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].
The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

The biggest possible sum taking a limit of 174 into account is then 173 and the distances of the 3 corresponding towns is [55, 58, 60].

The function chooseBestSum (or choose_best_sum or ... depending on the language) will take as parameters t (maximum sum of distances, integer >= 0), 
k (number of towns to visit, k >= 1) and ls (list of distances, all distances are positive or null integers and this list has at least one element).
The function returns the "best" sum ie the biggest possible sum of k distances less than or equal to the given limit t, if that sum exists, or otherwise nil, null, None, Nothing, depending on the language. 

self note:
1. biggest posible sums, with a LIMIT and only visit 3 towns!
2. okay os what you have to do is dont freakin panick, secondly you have to sum all the array
   based on the given limit aaaaand dont forget John only wants to visit 3 towns because he's a tired old man
3. berapa tambah berapa yang hasilnya sama that equals to t OR mendekati dengan hasil t example t = 230 
   tapi hasilnya setelah penjumlahan itu 228. berarti kita ambil dulu angka dari array ls, (but also remember cuman bisa ambil 3 angka)
   then we push it to a new array and we sum all the number. Afterwards we print the result!

   It's pretty easy to understand but really hard if it comes to write the code.

*/
