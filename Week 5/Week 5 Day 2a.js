// Most Frequent Largest Numbers
function sorting(arr) {
    // Pada fungsi sort ini saya menggunakan BubbleSort algorithm.
    // Semua anggota dari array akan dibandingkan satu persatu,
    // sehingga diperoleh urutan data yang sudah diurutkan dari besar terkecil.
    // Untuk sementara data yang bisa diurutkan hanyalah data bertipe number.
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

function getTotal(arr) {
    // Membuat sebuah varible penampung untuk menyimpan data berapa kali 
    // angka terbesar muncul sekaligus menjadi counter.
    var count = 0;
    // Karena hasil dari fungsi sorting() secara otomatis mereturn nilai
    // dari kecil ke terbesar, maka secara otomatis nilai terbesar berada di belakang.
    // Dilakukan pengecekan berulang sebanyak banyak data.
    // Ketika angka sama degan data number terbesar, maka counter akan bertambah 1.
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == arr[arr.length-1]){
            count++;
        }
    }
    // Jika hingga terkahir counter tetap 0, maka data yang masuk adalah array kosong, 
    // maka secara langsung akan mereturn string kosong.
    if(count == 0){
        return ''
    }
    // Jika conter tidak 0, akan langsung merturn data yang sesuai.
    return 'angka paling besar adalah ' + arr[arr.length-1] + ' dan jumlah kemunculannya sebanyak ' + count + ' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

// Refrence : https://en.wikipedia.org/wiki/Bubble_sort