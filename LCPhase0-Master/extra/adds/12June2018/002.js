/*
    wajib pseudocode. 

    Jawaban pseudocode disini 
    
*/

function soal2(param) {
    var abjad = 'abcdefghijklmnopqrstuvwxyz' 
    var kaliAbjad = ''
    var limitKali = (Math.ceil(param * param / 26)); // -> GA perlu banget -> length = 26, 8*8=64 -> Math.ceil(param*param/abjad.length)
    for (var k=0; k<limitKali; k++) { // limit param diganti 
        kaliAbjad +=abjad
    } 
    // console.log(kaliAbjad);
    

    if (param === 0) {
        return 'invalid input'
    }
    else {
        var result = [];
        var urutan = 0; 
        for (var i=0; i<param; i++) {
            result.push([]);
            for (var j=0; j<param; j++) {
                    result[i].push(kaliAbjad[j+urutan]);
    
            }
            urutan += param;
        }
        return result;
    }

}

/*
var abjad =
var result = []
looping ke bawah i
    push[]
    var urutan = 0
    looping 0 -> param
        push abjad[j]
        urutan += param
*/

console.log(soal2(8))
/*
    [
        ['a','b','c','d','e','f','g','h']
        ['i','j','k','l','m','n','o','p']
        ['q','r','s','t','u','v','w','x']
        ['y','z','a','b','c','d','e','f']
        ['g','h','i','j','k','l','m','n']
        ['o','p','q','r','s','t','u','v']
        ['w','x','y','z','a','b','c','d']
        ['e','f','g','h','i','j','k','l']
    ]
*/

console.log(soal2(2))
/*
    [
        ['a','b'],
        ['c','d']
    ]
*/

console.log(soal2(0)) // invalid input

// time: 22 mins