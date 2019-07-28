// NO.1
var rows1 = 5;
for(var i = 0; i<rows1; i++){
	console.log('*');
}

// NO.2
var rows2 = 5;
for(var i = 0; i<rows2; i++){
	var x = '';
	for(var y = 0; y<rows2; y++){
		x += '*';
	}
	console.log(x);
}

// NO.3
var rows3 = 5;
var x = '';
for(var i = 0; i<rows3; i++){
	for(var y = 0; y<1; y++){
			console.log(x += '*');
	}
}