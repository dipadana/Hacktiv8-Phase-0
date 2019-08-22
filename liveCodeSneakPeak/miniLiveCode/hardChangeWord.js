    /*
    CHANGE WORDS
    Change words adalah sebuah fungsi yang menerima input
    berupa multi dimensional array yang berisi kata dan
    akan mengembalikan nilai baru berupa array multidimensional yang sudah diubah kata-katanya.
    RULES:
    1. Asumsi index row dan col selalu dimulai dari 0
    2. Pertambahan index row dan col akan menentukan bagaimana kata tersebut akan diolah:
        a. Apabila hasil pertambahan adalah bilangan prima maka hilangkan semua huruf vokal (a, e, i, u, o)
        b. Apabila hasil pertambahan adalah angka genap maka balik atau reversed kata tersebut
        c. Apabila hasil pertambahan adalah angka ganil maka ubah semua menjadi huruf besar
    EXAMPLE:
    INPUT: [
        ["cat", "fish"],
        ["dog", "cow"]
    ]
    OUTPUT: [
        ["tac", "FISH"],
        ["DOG", "wc"]
        ]
    EXPLANATION
        1. pertambahan index pada kata "cat" 0 berarti dia hanya bilangan genap sehingga kata "cat" dibalik menjadi "tac"
        2. pertambahan index pada kata "fish" dan "dog" adalah bilangan ganjil sehingga kedua kata tersebut diubah ke huruf besar
        3. Pertambahan pada kata "cow" adalah bilangan genap dan prima sehingga kata tersebut dibalik dan dihilangkan huruf vokalnya
    RULES:
        1. dilarang menggunakan built in function .split, .reversed, .join, .filter, .map dan sejenisnya
    */


// Untuk menyelesaikan soal diatas, saya mempergunakan banyak fungsi karena
// banyaknya langkah-langkah yang diperlukan. Sehingga akan sangat rumit jika
// dijadikan satu fungsi saja

function angkaPrima(num){
    for(var i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        } 
    }
    return num > 1;
}

function hapusVokalManual(str){
    var output = '';
    for( var i = 0; i < str.length; i++){
        if(str[i] != 'a' && str[i] != 'i' && str[i] != 'u' && str[i] != 'e' && str[i] != 'o'){
            output += str[i];
        }
    }
    return output;
}

function hapusVokal(str){
    return str.match(/[^aiueoAIUEO]+/gi).join('')
}

function hurufBesar(str){
    return str.toUpperCase();
}

function balikKata(str){
    var output = '';
    for(var i = str.length-1; i >= 0; i--){
        output += str[i];
    }
    return output;
}

function changeword(arr){
    var output = [];
    for(var k = 0; k < arr.length; k++){
        output.push([]);
    }
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].length; j++){
            // Untuk menentukan jumlah row dan collumn, digunakan 
            // penjumlahan indeks i dan j sebagai patokannya
            if((i+j)%2 != 0){
                output[i][j] = hurufBesar(arr[i][j]);
            }
            else if((i+j)%2 == 0){
                output[i][j] = balikKata(arr[i][j]);
            }
            if(angkaPrima(i+j) == true){
                output[i][j] = hapusVokal(output[i][j]);
            }
        }
    }
    return output;
}

var input = [
    ["cat", "fish"],
    ["dog", "cow"],
    ['Dipa','goreng'],
    ['gila','makan'],
    ['mantap','minum']
];

console.log(input[2][1])

console.log(changeword(input));

