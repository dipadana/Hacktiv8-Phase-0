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
    if (param % 2 === 0) { // genap
        return 'invalid input';
    }
    else {
        for (var i=0; i<param; i++) {
            // console.log(' ');
            var baris = '';
            var tengah = Math.floor(param/2);
            for (var j=0; j<param; j++) { // part of STRING GA BISA DI RE-ASSIGN!
                var batas = Math.floor(param/2)
                // console.log(batas, j, 'batas');
                
                if (j < batas || j > batas) {  // 4
                    baris += ' ';
                }
                else if (j === batas) {
                    baris +='*';
                }
                
            }
            if (i === tengah) {
                var bintangTerus = '';
                for (var j=0; j<param; j++) {
                    bintangTerus += '*';
                }
                baris = bintangTerus;
            }
            console.log(baris);
        }
    }
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