// Live Coding Week 4 - Question 4
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
///////////////////
richestGroupDynamic
///////////////////
Function richestGroupDynamic akan menentukkan siapa yang paling kaya dalam suatu grup.
Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
Function ini akan mengembalikkan nilai string.
----------
EXAMPLE 1:
----------
[INPUT]
    var groups = [
    ['A', 'B', 'C'],
    ['A', 'A', 'D', 'D', 'D']
    ]
[PROCESS]
Pada array ['A', 'B', 'C'] tidak ada yang unggul.
Pada array ['A', 'A', 'D', 'D', 'D'] D unggul.
[OUTPUT]
    [ 'D' ]
----------
EXAMPLE 2:
----------
[INPUT]
    var groups = [
    ['Z', 'Z'],
    ['B']
    ]
[PROCESS]
Pada array ['Z', 'Z'] Z unggul.
Pada array ['B'] B unggul.
[OUTPUT]
    [ 'Z', 'B' ]
[RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroupDynamic(arr){
    var temp = 0; // Menyimpan sementara jumlah suatu element dalam array
    var temp2 = [];  // Menyimpan element array yang memiliki anggota terbanyak
    var max = []; 
    var maxFinal = 0;
    for(var h = 0; h < arr.length; h++){
        temp2.push('');
        max.push(0)
    }
    var seri = false;
    var groupWin = '';

    
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            for(var k = 0; k < arr[i].length; k++){
                if(arr[i][j]==arr[i][k]){
                    temp++;
                }
            }
            console.log(max.length)
            if(arr[i].length == 1 || 1 < temp){
                temp2[i] = arr[i][j];
                max[i] = temp
                seri = false;
            }
            else if(max == temp && temp2[i] != arr[i][j]){
                seri = true;
            }
            temp = 0;
            console.log(temp2)
            console.log(max[i])
        }
    }
    // // Jika mencari
    // for(var l = 0; l < arr.length; l++){
    //     var sortTemp = 0;
    //     if(sortTemp < max[l]){
    //         maxFinal = max[l]
    //         groupWin = temp2[l]
    //         console.log(max[l])
    //     }
    // }
    console.log(seri)
    if(temp2[0] == ''){
        return [temp2[1]]
    }
    else if(temp2[1] == ''){
        return [temp2[0]]
    }
    else if(temp2[0] == temp2[1]){
        return [temp2[0]]
    }
    else{
        return temp2
    }
}

console.log(richestGroupDynamic([['A', 'B', 'C', 'D', 'A', 'D'],['A', 'A', 'D', 'D', 'D']]));