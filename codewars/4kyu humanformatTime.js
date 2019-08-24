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