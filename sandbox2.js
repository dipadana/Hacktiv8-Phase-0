function jam(num){
	var tahun = Math.floor(num/31536000);
	var hari = Math.floor((num%31536000)/86400);
	var jam = Math.floor(((num%31536000)%86400)/3600);
	var menit = Math.floor(((num%31536000)%86400)%3600/60);
	var detik = ((num%31536000)%86400)%3600%60;
	var output = '';

	if(num == 0) output = 'now'

	if(tahun){
		if(tahun == 1) output += tahun + ' year';
		else output += tahun + ' years';
	}

	if(hari){
		if(tahun && !jam){
			output += ' and ';
		}
		else if(tahun){
			output += ', ';
		}
		if(hari == 1) output += hari + ' day';
		else output += hari + ' days';
	}

	if(jam){
		if(hari && !menit){
			output += ' and ';
		}
		else if(hari){
			output += ', ';
		}
		if(jam == 1) output += jam + ' hour';
		else output += jam + ' hours';
	}

	if(menit){
		if(jam && !detik){
			output += ' and ';
		}
		else if(jam){
			output += ', ';
		}
		if(menit == 1) output += menit + ' minute';
		else output += menit + ' minutes';
	}
	
	if(detik){
		if(menit || jam || hari || tahun){
			output += ' and ';
		}
		if(detik == 1) output += detik + ' second';
		else output += detik + ' seconds';
	}
	return output;
}

// console.log(jam(12)); // returns "1 minute and 2 seconds"
// console.log(jam(3662)); // returns "1 hour, 1 minute and 2 seconds"
console.log(jam(1321230));
// '4 years, 68 days, 3 hours and 4 minutes'
// '4 years, 68 days, 3 hours, 4 minutes'
// Expected: '8 years, 12 days, 13 hours, 41 minutes and 1 second'