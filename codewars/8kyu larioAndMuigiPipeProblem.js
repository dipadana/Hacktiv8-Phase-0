function pipeFix(numbers){
    var obj = {};
    var i = numbers[0];
    var k = 0;
    while(i <= numbers[numbers.length-1]){
        if(!obj['|'+k+'|']){
            obj['|'+k+'|'] = i;
        }
        i++;
        k++;
    }
    var len = Object.keys(obj).length;
    var arr = [];
    for(var i = 0; i < len; i++){
        arr.push(obj['|'+i+'|'])
    }
    return (arr);
}

console.log(pipeFix([-1,4])) // [-1, 0, 1, 2, 3, 4]