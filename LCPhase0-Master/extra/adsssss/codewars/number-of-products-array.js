function product(values) {

	var num = 1;

	if(!values || values.length === 0){
		return null;
	}

	for (var i = 0; i < values.length; i++) {
		// console.log(values[i])
		num *= values[i];
	}
	return num
}
console.log(product([5, 4, 1, 3, 9]));//540
console.log(product([-2, 6, 7, 8])); //-672
console.log(product([10])); //10
console.log(product([0, 2, 9, 7])); //0
console.log(product(null)); //null
console.log(product([])); //null

//bikin variable dengan value 0 supaya bisa di kali semua
// jika null maka return null dan jika array kosong maka return null
