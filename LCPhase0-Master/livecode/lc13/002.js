function soal2(param) {
    var result = [];
    if(param.length%2 === 0){
        for(var i = 0; i < (param.length/2); i++){
            var collect = [];
            collect.push(param[i])
            collect.push(param[param.length-i-1])
            result.push(collect)
        }
    }else{
        for(var i = 0; i <= Math.floor(param.length/2); i++){
            var collect = [];
            if(i < Math.floor(param.length/2)){
                collect.push(param[i])
                collect.push(param[param.length-i-1])
                result.push(collect)
            }
            else if(i === Math.floor(param.length/2)){
                collect.push(param[i])
                collect.push('Instruktur')
                result.push(collect)
            }
        }
    }
    return result
}

//OR

function soal2(param) {
    var result = []
    for(var i = 0; i < param.length/2; i++){
      var temp = [];
      if(param[i] === param[param.length-1-i]){
        temp.push(param[i], 'Instruktur')
      }else{
        temp.push(param[i], param[param.length-1-i])
      }
      result.push(temp)
    }
    return result
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
