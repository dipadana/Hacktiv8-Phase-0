// NO.1
function shoutOut(){
	x = 'Halo Function!';
	return x;
}
console.log(shoutOut());


// NO.2
function calculateMultiply(x,y){
	b=x*y;
	return b;
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);


// NO.3
function processSentence(name, age, address, hobby){
	var senctence = 'Nama saya ' + name + ', umur saya ' + age + 'tahun, alamat saya di ' + address + ', dan saya punya hobby yaitu ' + hobby + '!';
	return senctence;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 