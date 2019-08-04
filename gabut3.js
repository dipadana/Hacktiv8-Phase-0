function omg(arr){
    arr.sort(function(value1, value2) { return value1 - value2 });
    for(var i = 0; i < arr.length-1; i+=2){
        if(arr[i] != arr[i+1]){
            return arr[i];
        }
    }
    return arr[arr.length-1];
}

console.log(omg([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])); //5
console.log(omg([1,1,2,-2,5,2,4,4,-1,-2,5])); //-1
console.log(omg([20,1,1,2,2,3,3,5,5,4,20,4,5])); //5
console.log(omg([10])); //10
// console.log(omg([1,1,1,1,1,1,10,1,1,1,1])); //10
// console.log(omg([5,4,3,2,1,5,4,3,2,10,10])); //1