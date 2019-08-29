/*
    soal : 
    buatlah bendera inggris pada abad pertengahan dan era perang salib 
    dengan lambang St. George's Cross, 
    https://id.wikipedia.org/wiki/Bendera_Inggris

    dengan berbagai ukuran yang ditentukan
    oleh input. bendera berbentuk persegi .

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

    petunjuk : 
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/
function benderaInggris(param) {
    var mid = Math.floor(param/2);
    if(param%2 === 0){
        return 'invalid input';
    }else{
        var result = '';
        for(var i = 0; i < param; i++){
            for(var j = 0; j < param+2; j++){
                if(j === 0 || j === param+1){
                    result += "'"
                }else if(i === mid){
                    result += '*'
                }else if(j === mid+1){
                    result += '*'
                }else{
                    result += ' '
                }
            }
            result += '\n'
        }
    }
    return result
}

/*
if genap 
    return invalid

if ganjil
    
    looping ke bawah [i]
    var result = ''
        looping ke samping [j]
        result += ' '
*/


console.log(benderaInggris(9))

/*
    output:
    '    *    ' // 1 -> 9 -> 0123*5678
    '    *    ' // 2
    '    *    ' // ..
    '    *    '
    '*********'
    '    *    '
    '    *    '
    '    *    '
    '    *    ' // 9
*/

console.log(benderaInggris(5))
/*
    '  *  '
    '  *  '
    '*****'
    '  *  '
    '  *  '
*/

console.log(benderaInggris(4)) // invalid input