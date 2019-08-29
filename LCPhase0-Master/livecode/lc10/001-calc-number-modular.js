
/**
=====================================
Modular Functions: Calculate Number in Object
=====================================

[INSTRUKSI]

Diberikan function kali, tambah, bagi, kurang, dan calculate

Implementasikan function calculate untuk menghitung angka-angka yang ada di dalam object, operator perhitungan tersedia di dalam object.
ASUMSI:
 - keyName operand1, operand2 dan operator selalu ada
 - value dari operand1 dan operand2 selalu number
 - value dari operator berupa string: '+', '-', '*' atau '/'

 Function calculate akan me-return sebuah array yang berisi hasil perhitungan dari object tersebut.

contoh 1:
input: [ {
              operand1: 5,
              operand2: 10,
              operator: '*'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '-'
            },
            {
              operand1: 3,
              operand2: 10,
              operator: '/'
            }
          ];
output: [50, -7, 0.3]

contoh 2:
input: []
output: []

*/
function kali(operand1, operand2) {

	return operand1 * operand2;
}

function tambah(operand1, operand2) {
	return operand1 + operand2;
}

function kurang(operand1, operand2) {

	return operand1 - operand2

}

function bagi(operand1, operand2) {

	return operand1 / operand2;

}

function calculate(arrNumber){

  var empty = [];
	if(!arrNumber.length){
		return empty;
	}

	var result = [];
	var perkalian = null;
	var add = null;
	var min = null;
	var devide = null;

	for(var i = 0; i < arrNumber.length; i++){
		// console.log(arrNumber[i].operator)
		if(arrNumber[i].operator === "*"){
			perkalian = kali(arrNumber[i].operand1, arrNumber[i].operand2);
			result.push(perkalian)
		} else if (arrNumber[i].operator === "-"){
			min = kurang(arrNumber[i].operand1, arrNumber[i].operand2);
			result.push(min)
		} else if (arrNumber[i].operator === "+"){
			add = tambah(arrNumber[i].operand1, arrNumber[i].operand2);
			result.push(add)
		} else if (arrNumber[i].operator === "/"){
			devide = bagi(arrNumber[i].operand1, arrNumber[i].operand2);
			result.push(devide) 
		}
	}

	return result
}

console.log(calculate([{ operand1: 5, operand2: 10, operator: '*' }, { operand1: 3, operand2: 10, operator: '-'}]));
//[50, -7]
console.log(calculate([])); //[]

//16 minutes 37 sec