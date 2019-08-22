function zero(a = '+0'){
    if(a == '+0'){
        return eval(0 + '+0');
    }
    else{
        return Math.floor(eval(0+a));
    }
}

function one(a = '+0'){
    if(a == '+0'){
        return eval(1 + '+0');
    }
    else{
        return Math.floor(eval(1+a));
    }
}

function two(a = '+0'){
    if(a == '+0'){
        return eval(2 + '+0');
    }
    else{
        return Math.floor(eval(2+a));
    }
}

function three(a = '+0'){
    if(a == '+0'){
        return eval(3 + '+0');
    }
    else{
        return Math.floor(eval(3+a));
    }
}

function four(a = '+0'){
    if(a == '+0'){
        return eval(4 + '+0');
    }
    else{
        return Math.floor(eval(4+a));
    }
}

function five(a = '+0'){
    if(a == '+0'){
        return eval(5 + '+0');
    }
    else{
        return Math.floor(eval(5+a));
    }
}

function six(a = '+0'){
    if(a == '+0'){
        return eval(6 + '+0');
    }
    else{
        return Math.floor(eval(6+a));
    }
}

function seven(a = '+0'){
    if(a == '+0'){
        return eval(7 + '+0');
    }
    else{
        return Math.floor(eval(7+a));
    }
}

function eight(a = '+0'){
    if(a == '+0'){
        return eval(8 + '+0');
    }
    else{
        return Math.floor(eval(8+a));
    }
}

function nine(a = '+0'){
    if(a == '+0'){
        return eval(9 + '+0');
    }
    else{
        return Math.floor(eval(9+a));
    }
}

function plus(a=1){
    return '+' +  a;
}

function minus(a=1){
    return '-' +  a;
}

function times(a=1){
    return '*' +  a;
}

function dividedBy(a=1){
    return '/' + a;
}

// TEST CASE
console.log(five('-1'))
console.log(nine(dividedBy(two()))); // must return 35
console.log(Math.floor())