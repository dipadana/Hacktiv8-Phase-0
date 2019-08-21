// Mengurutkan angka dari terbesar ke terkecil

var arr = [4,3,2,8,7,9,1];

function mySort(arr){
    var temp = 0;
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

console.log(mySort(arr));