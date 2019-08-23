/*
  ===================
  MOBA LEGEND ADDRESS
  ===================
  mobaLegendAddress adalah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi info hero-hero mobile legend
  output dari function ini adalah array dengan object yang memiliki address yang berbeda
  [NOTES]
  - apabila terdapat hero yang tidak memiliki address maka dianggap tidak valid
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
	- urutan tidak masalah
*/

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

function sortAsc(arr, key, sort = 'asc'){
  var array = Object.keys(arr[0]);  
  var key = array[key];

  var max = 0;
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
          if(sort == 'dsc'){
            if(arr[i][key] < arr[j][key]){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
            }
          }
          else{
            if(arr[i][key] > arr[j][key]){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
            }
          }
            

        }
    }
    return arr;
}

function mobaLegendAddress(array){
	var output = [];
	var addresTemp = []
	var arr = sortAsc(array, 1)
	console.log(arr)
	for(var i = 0; i < arr.length; i++){
		addresTemp.push(arr[i].address);
	}
  console.log(addresTemp)
  
  var temp = removeDuplicate(addresTemp)
  console.log(temp)

  for(var i = 0; i < arr.length; i++){
		for(var j = 0; j < temp.length; j++){
      if(arr[i].address == temp[j] && arr[i].address != undefined){
        output.push(arr[i])
      }
    }
  }
  console.log(output)
}

console.log(mobaLegendAddress([
  {
    name: 'Layla',
    address: 'Cimahi'
  },
  {
    name: 'Zi Long',
    address: 'Sukabumi'
  },
  {
    name: 'Balmond',
    address: 'Cimahi'
  },
  {
    name: 'Freya'
  }
]))
// [{
//   name: 'Zi Long',
//   address: 'Sukabumi'
// }]