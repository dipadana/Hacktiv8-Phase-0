function fibo2(num){
	if(num <= 1){
		return 1;
	}
	else{
		return fibo(num-1) + fibo(num-2); 
	}
}


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

console.log(fibo(4));