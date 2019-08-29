/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    if(param%2 === 0 || param <= 3){
        return 'Invalid input';
    }
  
    var result = '';
    for(var i = 0; i < param; i++){
        for(var j = 0; j < param+2; j++){
            if(j === 0 || j === param+1){
                result += "'"
            }else if(j > 0 && j < param+1){
                if(j === i+1 || j === param-i){
                    result += '*'
                }else{
                    result += ' '
                }
            }
        }
        result += '\n'
    }
    return result
}

console.log(scotlandFlag(3))
console.log(scotlandFlag(6))
console.log(scotlandFlag(5))
/*
    '*   *'
    ' * * '
    '  *  '
    ' * * '
    '*   *'
*/

console.log(scotlandFlag(9))
/*
    '*       *'
    ' *     * '
    '  *   *  '
    '   * *   '
    '    *    '
    '   * *   '
    '  *   *  '
    ' *     * '
    '*       *'
*/