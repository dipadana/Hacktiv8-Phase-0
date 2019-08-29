/*
    membuat bendera scotlandia

    output hanya menggunakan console.log string yang isinya 
    hanya berupa spasi kosong dan char *

     petunjuk : 
    - input harus lebih dari 3 , jika tidak maka "invalid input"
    - input harus bernilai ganjil , jika tidak ganjil maka " invalid input "
*/

function scotlandFlag(param) {
    if (param <= 3 || param % 2 === 0) {
        return 'invalid input'
    }
    else {
        // baris 0-tengah
        for (var i=0; i<Math.floor(param/2); i++) {
            // console.log(i);
            // kesamping
            var result = '';
            var loc = 0;
            for (var j=0; j<param; j++) {
                if (j === 0 || j === param-1) {
                    result += '*';
                    loc += 1;
                }
                else {
                    result += ' '
                }
                
            }
            console.log(result);
            
        }
        
    }
}

/*
*
ke samping: 0,4; 1,3; 2 -> 0 & length-1, 1 & length-2  (limit Math.floor(i/2))
*/

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