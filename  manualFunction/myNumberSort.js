// Mengurutkan angka dari terbesar ke terkecil
// Sudah di cek untuk huruf, selalu menggunakan tipe data yang sama, jika tidak maka akan error
// GUIDE : !@#(symbol) > 1 > A > a

var arr = [4,3,2,8,7,9,1];
var arr2 = ['dipadana', 'dinar', 'anjing', 'azin', 'Ihh kok gitu sih', 'A!212121', '1231231231', '111', '!zzza']

function mySort(arr){
    var temp = 0;
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
            // Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
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
console.log(mySort(arr2));