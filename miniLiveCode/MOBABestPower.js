
/*
  ======================
  MOBA LEGEND BEST POWER
  ======================
  mobaLegendBestPower adalah sebuah function dimana menerima 1 parameter heroes
    - heroes adalah sebuah array of object yang berisi nama-nama hero mobile legend
    - terdapat bonus combination yang merupakan bonus power untuk kombinasi hero
  output dari function ini adalah sebuah number total power terbesar
  [NOTES]
  - intinya menjumlahkan semua power ditambah juga dengan bonusCombination bila ada yang sesuai
  - dilarang menggunakan built in function selain .push(), .unshift(), .pop(), .shift()
*/

function mySplit(str,simbol) {
	var temp = '';
	var data1 = []
	for(var i = 0; i < str.length; i++){
		if(str[i] == simbol){
			data1.push(temp);
			temp = '';
		}
		else if(str[i] != ','){
			temp += str[i];
		}
	}
	data1.push(temp);
	return(data1);
}

function mobaLegendBestPower(arr){
  // Kombo hanya terbatas pada dua hero!
  let bonusCombination = {
    'Zi Long+Layla': 300,
    'Layla+Kagura': 400
  }

  // Function for get the key of object
  var bonusCombinationArr = [];
  for(var property in bonusCombination) {
    bonusCombinationArr.push(property);
  }
  var temp = [];
  console.log(mySplit(bonusCombinationArr[0],'+'));
  for(var i = 0; i < bonusCombinationArr.length; i++){
    temp.push(mySplit(bonusCombinationArr[i],'+'));
    temp[i].push(bonusCombination[bonusCombinationArr[i]])
  }
  console.log(temp)

  var output = 0;
  for(var i = 0; i < arr.length; i++){
    output += arr[i].power
  }
  console.log(output)

  console.log(arr)
  for(var i = 0; i < arr.length-1; i++){
    for(var j = 0; j < temp.length; j++){
      console.log(arr[i].name, arr[i+1].name)
        if(arr[i].name == temp[j][0] && arr[i+1].name == temp[j][1]){
          output += temp[j][2];
          console.log(temp[j][2])
          
        }
        
    }
  }
  return output;
}

//TEST CASE
console.log(mobaLegendBestPower([
  {
    name: 'Zi Long',
    power: 2000
  },
  {
    name: 'Layla',
    power: 1800
  },
  {
    name: 'Kagura',
    power: 2500
  }
])) // 7000

console.log(mobaLegendBestPower([
  {
    name: 'Zi Long',
    power: 2000
  },
  {
    name: 'Layla',
    power: 1800
  }
])) // 4100