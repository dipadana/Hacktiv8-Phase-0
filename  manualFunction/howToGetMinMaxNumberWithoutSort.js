// Fungsi penentu angka terbesar dari suatu array tanpa sort

var arr = [8,9,2,5,1,7,4,8];

function angkaTerkecil (arr) {
    var temp = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(temp > arr[i]){
            temp = arr[i]
        }
    }
    return temp;
}

function angkaTerbesar (arr) {
    var temp = arr[0];
    for(var i = 0; i < arr.length; i++){
        if(temp < arr[i]){
            temp = arr[i]
        }
    }
    return temp
}

console.log(angkaTerbesar(arr));
console.log(angkaTerkecil(arr));