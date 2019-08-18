function number(number){
    var arr = String(number).split('');
    console.log(arr);
    var temp = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[arr.length-(1+i)] > arr[arr.length-(2+i)]){
            temp = arr[arr.length-(2+i)];
            arr[arr.length-(2+i)] = arr[arr.length-(1+i)];
            arr[arr.length-(1+i)] = temp;
            break;
        }
    }
    return number == Number(arr.join('')) ? -1 :Number(arr.join(''));
}

// console.log(number(10441));
// console.log(number(12));
// console.log(number(513));
// console.log(number(414));
// console.log(number(144));
// console.log(number(9));
// console.log(number(111));
console.log(number(59884848459853)); //59884848483559