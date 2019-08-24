function expandedForm(num){
  // Merubah angka yang masuk menjadi array
  var output = '';
  var arr = String(num).split('.');
  
  // Memisahkan angka menjadi dua, angka depan koma, dan angka belakang koma
  var temp = []
  for(var i = 0; i < arr.length; i++){
    temp.push(arr[i].split(''))
  }
  
  // Memproses angka didepan koma
  var outputDepan = []
  temp[0].reverse();
  for(var  i = 0; i < temp[0].length; i++){
    if(temp[0][i] != '0'){
      i == 0 ? outputDepan.push(temp[0][i]) : outputDepan.push(String((10**i) * Number(temp[0][i])));
    }
  }
  outputDepan.reverse();

  // Memproses angka dibelakang koma
  var outputBelakang = [];
  for(var i = 0; i < temp[1].length; i++){
    if(temp[1][i] != '.' && temp[1][i] != '0'){
      outputBelakang.push(temp[1][i] + '/' + (10**(i+1)))
    }
  }

  // Menggabungkan depan dan belakang kedalam satu array
  var gabung = outputDepan.concat(outputBelakang)

  // Memproses output data
  for(var i = 0; i < gabung.length; i++){
    i == gabung.length-1 ? output += gabung[i] : output += gabung[i] + ' + '
  }
  return output;
}

console.log(expandedForm(1209.02004)) // 1 + 2/10 + 4/100