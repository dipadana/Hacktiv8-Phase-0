function soal1(param) {
    var result = '';
    for (var i=param.length-1; i>=0; i--) {
        result += param[i]
        if(i > 0){
            result += '\n'
        }
    }
    return result
}

console.log(soal1("Aries Dimas Yudhistira"));
/*

looping param start length-1, end: 0 i
    log


    a
    r
    i
    t
    s
    i
    h
    d
    u
    Y

    s
    a
    m
    i
    D

    s
    e
    i
    r
    A
*/


// time: 5 mins