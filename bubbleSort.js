var arr = [4,3,2,8,7,9,1];
var temp = 0;
function bubbleSort(arr){
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort(arr));