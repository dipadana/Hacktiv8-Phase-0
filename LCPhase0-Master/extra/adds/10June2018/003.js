// function soal3(param) {
//     var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     var result = [];
//     for (var a=0; a<abjad.length; a++) {
//         result.push([]);
//     }

//     for (var i=0; i<param.length; i++) {
//         for (var j=0; j<abjad.length; j++) {
//             if (param[i][0] === abjad[j]) {
//                 // console.log(abjad[j]);
//                 var indexToResult = abjad.indexOf(abjad[j]);
//                 // console.log(indexToResult);
//                 result[indexToResult].push(param[i])
//             }
            
//         }
//     }
//     // console.log(result);
//     result.sort();
//     // console.log(result[0]);
//     while (result[0].length === 0) {
//         result.shift()
//     }
//     // console.log(result);

//     var obj = {}
//     for (var k=0; k<result.length; k++) {
//         var firstLetter = result[k][0][0];
//         obj[firstLetter] = result[k]
//     }
    
//     return obj;
    
// }

function soal3(param) {
    var abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    // var result = [];
    var obj = {}
    // looping abjad -> looping param -> masukin ke object
    for (var i=0; i<abjad.length; i++) {
        // console.log(abjad[i]);
        obj[abjad[i]] = []; // param[j]
        for (var j=0; j<param.length; j++) {
            if (abjad[i] === param[j][0]) {
                // console.log(param[j]);
                obj[abjad[i]].push(param[j])
            }
        }
    }

    // DELETE key object yang kosong
    for (var k=0; k<abjad.length; k++) {
        var urutanAbjad = abjad[k];
        // console.log(obj[urutanAbjad]);
        if (obj[urutanAbjad].length === 0) {
            delete obj[urutanAbjad];
        }
    }
    console.log(obj);
    
    
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



time: 19 mins
*/