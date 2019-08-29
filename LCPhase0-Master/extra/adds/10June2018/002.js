// mirip soal pasangan , namun agak beda
// 1 orang bisa ngerjain soal ini , klo dia bisa, kamu juga
function soal2(param) {
    // 1. bikin result = [[], [], []]
    var result = []; // klo blom ada array partnya, nnti dibuat dulu diatas math ceil
    for (var j=0; j<Math.ceil(param.length/2); j++) {
        result.push([]);
    }

    // 2. masukin masing2 i ganjil dan genap 
    for (var i=0; i<param.length; i++) {
        // console.log(param[i]);
        if (i % 2 === 0) { // i genap
            // console.log(i);
            result[i/2].push(param[i]);
        }
        else { // i ganjil
            var arrayInsideArray = Math.floor(i/2);
            result[arrayInsideArray].push(param[i]);
        }
    }

    // 3. kalo index array terakhirnya sendirian..
    // console.log(result[result.length-1][1]);
    var indexLastArray = result.length-1
    if (result[indexLastArray][1] === undefined) {
        result[indexLastArray].push('Instruktur')
    }
    return result;
    
    
}

console.log(soal2(['Aries','Dimas','Gatot',"Nurmantyo","Zainul","Majdi"])) // length/2
/*
    output: 
    [['Aries','Majdi'],['Dimas','Zainul'],['Gatot','Nurmantyo']]
*/

console.log(soal2(['A','B','C','D','E']))// // 
// // [ ['A','E'] , ['B','D'], ['C','Instruktur']]

console.log(soal2(['Susan','Albert','Erithiana','Zaki','Sisijoan','Henry',"Nio"]))
// // [['Susan','Nio'],['Albert','Henry'],['Erithiana','Sisijoan'],['Zaki','Instruktur']]

/*
0 -> push.array[i] -> i: 0/2: 0
1-> i: Math.floor(1/2)
2 -> push.array[i] -> i: 2/2: 1
3

result = []
looping param [i]
    if genap
        result.push[]

    else
        
time: 20 mins
*/