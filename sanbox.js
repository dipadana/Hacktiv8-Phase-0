function descendingOrder(n){
    return Number(n.toString().split('').sort(function(value1, value2) { return value2 - value1 }).join(''));
}