// function soal3(param) {
//     var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     // var result = [];
//     var obj = {}
//     // looping abjad -> looping param -> masukin ke object
//     for (var i=0; i<abjad.length; i++) {
//         // console.log(abjad[i]);
//         obj[abjad[i]] = []; // param[j]
//         for (var j=0; j<param.length; j++) {
//             if (abjad[i] === param[j][0]) {
//                 // console.log(param[j]);
//                 obj[abjad[i]].push(param[j])
//             }
//         }
//     }

//     // DELETE key object yang kosong
//     for (var k=0; k<abjad.length; k++) {
//         var urutanAbjad = abjad[k];
//         // console.log(obj[urutanAbjad]);
//         if (obj[urutanAbjad].length === 0) {
//             delete obj[urutanAbjad];
//         }
//     }
//     console.log(obj);
    
    
// }

//OR


function soal3(param) {
    var obj = {};
    var collect = [];

    param.sort()
    for(var i = 0; i < param.length-1; i++){
        for(var j = 0; j < param.length-i; j++){
            if(param[i][0] > param[i+1][0]){
                var temp = param[i][0];
                param[i][0] = param[i+1][0];
                param[i+1][0] = temp
            }
        }
    }

    for(var i = 0; i < param.length; i++){
        if(obj[param[i][0]] === undefined){
            obj[param[i][0]] = [param[i]]
        }else{
            obj[param[i][0]].push(param[i])
        }
    }
    return obj
}

// OR

function soal3(param) {
var result = {};
var alphabet =  'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for(var k = 0; k < alphabet.length; k++){
        for(var i = 0; i < param.length; i++){          //dgn cara ini key nya urut, tp valuenya tidak urut
            if(alphabet[k] === param[i][0]){
                result[param[i][0]] = [];
                for(var j = 0; j < param.length; j++){
                    if(param[i][0] === param[j][0]){
                        result[param[i][0]].push(param[j])
                    }
                }
            }
        }
    }
    return result
}


/*
looping param.length  / K
    looping abjad.length [j]
        if param[i][0] === 'K' -> abjad[j]
        var indexToResult = abjad.indexOf('abjad[j]) -> indexnya
        result[indextoresult].push(param[i])
*/

console.log(soal3(['Ayam','Kucing','Bebek','Sapi','Babi','Curut','Cacing','Monyet']));
/*
    {
        A:['Ayam'],
        B:['Bebek','Babi'],
        C:['Cacing','Curut'],
        K:['Kucing'],
        M:['Monyet'],
        S:['Sapi']
    }
*/

console.log(soal3(['Anjing','Kuda','Anoa','Zebra','Lipan','Kudanil','Landak']))

/*
    {
        A:['Anjing','Anoa'],
        L:['Lipan','Landak'],
        K:['Kuda','Kudanil'],
        Z:['Zebra']
    }
*/

/*
bukan sort

bikin var result = [[], [], *26]

looping param.length  / K
    looping abjad.length [j]
        if param[i][0] === 'K' -> abjad[j]
        var indexToResult = abjad.indexOf('abjad[j]) -> indexnya
        result[indextoresult].push(param[i])



time: 5 mins
*/