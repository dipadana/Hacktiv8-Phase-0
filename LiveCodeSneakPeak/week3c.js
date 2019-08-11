// Live Coding Week 4 - Question 3
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
////////////
richestGroup
////////////
Function richestGroup akan menentukkan siapa yang paling kaya dalam suatu grup.
Function akan menerima 1 parameter yaitu:
    - groups adalah array yang berisi kumpulan data vote, tipe datanya array.
    - kelompok yang ada HANYA terdiri dari A dan B. tapi tidak harus selalu ada.
Function ini akan mengembalikkan nilai string.
----------
EXAMPLE 1:
----------
[INPUT]
    var groups = [
    ['A', 'B'],
    ['A', 'A']
    ]
[PROCESS]
Pada array ['A', 'B'] tidak ada yang unggul.
Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1
[OUTPUT]
    Group A win...
----------
EXAMPLE 2:
----------
[INPUT]
    var groups = [
    ['A', 'A'],
    ['B']
    ]
[PROCESS]
Pada array ['A', 'A'] A unggul, maka nilai group A ditambah 1.
Pada array ['B'] B unggul, maka nilai group B ditambah 1.
[NOTES]
Apabila ada yang seri atau tidak ada yang unggul maka tampilkan Tidak ada pemenangnya...
[OUTPUT]
    Tidak ada pemenangnya...
[RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift().
*/

function richestGroup(arr){
    var groupA = 0;
    var groupB = 0;
    var tempA = 0;
    var tempB = 0;
    
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            if(arr[i][j] == 'A'){
                tempA++;
            }
            else if(arr[i][j] == 'B'){
                tempB++;
            }
            console.log(tempA)
            console.log(tempB)
        }
        if(tempA > tempB){
            groupA++;
        }
        else if(tempA < tempB){
            groupB++
        }
        tempA = 0;
        tempB = 0;
    }
    console.log(groupA,groupB)
    if(groupA == groupB){
        return 'Tidak ada pemenangnya...';
    }
    else if(groupA > groupB){
        return 'Group A win...';
    }
    else{
        return 'Group B win...';
    }
}

console.log(richestGroup([['A', 'B'],['A', 'A']])); // Group A win...
console.log(richestGroup([['A', 'A'],['B']]));
console.log(richestGroup([['A', 'B', 'A'],['B', 'A', 'B', 'A']])); // Tidak ada pemenangnya...
console.log(richestGroup([[],[]]));