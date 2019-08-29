
// 6 kyu
// Write a function that takes in a string of one or more words, 
// and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.


// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

//1. split spasi
//2. looping kata yang paling panjang
//3. trus diablik masukin ke dalam bentuk  kalimat lagi tapi kali ini

// function spinWords(str){

// 	var result = "" ;
// 	var newStr = str.split(" ");
// 	// console.log(newStr)

// 	for (var i = 0; i < newStr.length; i++) {
// 		// console.log(newStr[i].length)
// 		var word = newStr[i];
// 		if(word.length >= 5){
// 			// result.push(newStr[i])
// 			for(var j = word.length - 1; j >= 0; j--){
// 				result += word[j];
// 			}
// 			result += " ";
// 		} 
// 		else {
// 			result += word + " ";
// 		}
// 	}
// 	return result;
// }

// console.log(spinWords("Hey fellow warriors")); //"Hey wollef sroirraw"
// console.log(spinWords("Soft universe"));
// console.log(spinWords("Speak to me, with love in those words"));

function spinWords(str){

	var word = [];
	var newStr = "";

	for(var i = 0; i < str.length; i++){
		// console.log(str[i])
		if(str[i] === " "){
			word.push(newStr);
			newStr = "";
		} else {
			newStr += str[i]
		}
	}
	
	word.push(newStr);

	var result = ""
	for (var j = 0; j < word.length; j++) {
		// console.log(word[j])
		if(word[j].length >= 5){
			for(var k = word[j].length - 1; k >= 0; k--){
				// console.log(word[j][k])
				result += word[j][k];
			}
				result += " "
		} else {
			result += word[j] + " " 
		}
	}
	return result
}

console.log(spinWords("Hey fellow warriors")); //"Hey wollef sroirraw"
console.log(spinWords("Soft universe"));
console.log(spinWords("Speak to me, with love in those words"));