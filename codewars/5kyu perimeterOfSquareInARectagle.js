function fibo(num){
  var a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

function fiboSum(num){
	var temp = 0;
	for(var i = 0; i <= num; i++){
		temp += fibo(num-i)
	}
	return 4*temp
}



console.log(fiboSum(5)) //80 