function tambah(arr1,arr2){
    var output = [];

    
    if(arr1.length > arr2.length){
        for(i = 0; i <= (arr1.length-arr2.length); i++){
            arr2.push(0)
        }
    }
    else if(arr1.length < arr2.length){
        for(i = 0; i <= (arr2.length-arr1.length); i++){
            arr1.push(0)
        }
    }

    for(var i = 0; i < arr1.length; i++){
        if(i%2 == 0){
            output.push(arr1[i] + arr2[i]); 
        }
        else if(i%2 != 0){
            output.push(arr1[i] - arr2[i]);
        }
    }

    return output;

}

console.log(tambah([1,2,3,4,5],[6,7,8,9,10]));

