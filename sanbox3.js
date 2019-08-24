function jam(num){
  // Calculate data
  var tahun = Math.floor(num/31536000);
	var hari = Math.floor((num%31536000)/86400);
	var jam = Math.floor(((num%31536000)%86400)/3600);
	var menit = Math.floor(((num%31536000)%86400)%3600/60);
	var detik = ((num%31536000)%86400)%3600%60;
	var output = [];
  var result = '';

  // Proses data display
  if(num == 0) return 'now'
  if(tahun) (tahun == 1) ? output.push((tahun + ' year')) : output.push((tahun + ' years')); 
  if(hari) (hari == 1) ? output.push((hari + ' day')) : output.push((hari + ' days')); 
  if(jam) (jam == 1) ? output.push((jam + ' hour')) : output.push((jam + ' hours')); 
  if(menit) (menit == 1) ? output.push((menit + ' minute')) : output.push((menit + ' minutes')); 
  if(detik) (detik == 1) ? output.push((detik + ' second')) : output.push((detik + ' seconds')); 

  // Return data
  for(var i = 0; i < output.length; i++){
    if(i == 0){
      result += output[i]
    }
    else if(i == output.length-1){
      result += ' and ' + output[i]
    }
    else result += ', ' + output[i]
  }
  return result;
}

console.log(jam(62)); // returns "1 minute and 2 seconds"
console.log(jam(3662)); // returns "1 hour, 1 minute and 2 seconds"
console.log(jam(4234242));
// '4 years, 68 days, 3 hours and 4 minutes'
// '4 years, 68 days, 3 hours, 4 minutes'
// Expected: '8 years, 12 days, 13 hours, 41 minutes and 1 second'