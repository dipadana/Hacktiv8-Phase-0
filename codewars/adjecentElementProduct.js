function adjacentElementsProduct(array) {
    var temp = Number.NEGATIVE_INFINITY;
    for(var i = 0; i < array.length-1; i++){
        if(array[i]*array[i+1] > temp)
            temp = array[i]*array[i+1];
    }
    return temp;
}

console.log(adjacentElementsProduct([1,2,3]))
console.log(adjacentElementsProduct([1,2,3,4]))  //6
console.log(adjacentElementsProduct([-1,2,-3,4])) 