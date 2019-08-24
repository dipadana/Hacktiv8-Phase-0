function fibo(num){
	if(num <= 2){
		return 1;
	}
	else{
		return fibo(num-1) + fibo(num-2); 
	}
}

console.log(fibo(6));