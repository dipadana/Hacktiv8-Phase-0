function mySort(arr){
  var temp = 0;
  for(var i = 0; i < arr.length-1; i++){
      for(var j = i+1; j < arr.length; j++){
          // Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
          if(arr[i] > arr[j]){
              temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
          }
      }
  }
  return arr;
}

function removeDuplicate(arr){
  var output = [];
  mySort(arr);
  var obj = {};
  var objKey = [];
  
  for(var i = 0; i < arr.length; i++){
    if(!obj[arr[i]]){
      obj[arr[i]] = 1;
      objKey.push(arr[i]);
    }
    else{
      obj[arr[i]] += 1;
    }
  }
  
  // Untuk mengetahui jumlah key yang ada
  var key = Object.keys(obj).length;

  

  for(var i = 0; i < key; i++){
    if(obj[objKey[i]] == 1){
      output.push(objKey[i]);
    }
  }

  return output;
}

// console.log(removeDuplicate([1,2,3,4,4,4,4,4,5,5,5,5,6])); //[1, 2, 3, 4, 5, 6]
console.log(removeDuplicate(['aku', 'aku', 'aku', 'dia', 'dia', 'saya'])); // ['aku', 'dia', 'saya']