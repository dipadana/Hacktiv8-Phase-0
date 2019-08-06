// Tantangan Array 3 (Array Join, Split, Slice, Splice, Sort)
var data = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(array){
    // Menggunakan splice
    var arr = array;
    arr.splice(1,2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
    arr.splice(4,1,"Pria","SMA International Metro");
    console.log(arr);

    // Menggunakan split
    var month = arr[3].split("/");
    var namaBulan = ' ';
    switch (Number(month[1])){
        case 01:
            namaBulan = ' Januari ';
            break;
        case 02:
            namaBulan = ' Februari ';
            break;
        case 03:
            namaBulan = ' Maret ';
            break;
        case 04:
            namaBulan = ' April ';
            break;
        case 05:
            namaBulan = ' Mei ';
            break;
        case 06:
            namaBulan = ' Juni ';
            break;
        case 07:
            namaBulan = ' Juli ';
            break;
        case 08:
            namaBulan = ' Agustus ';
            break;
        case 09:
            namaBulan = ' September ';
            break;
        case 10:
            namaBulan = ' Oktober ';
            break;
        case 11:
            namaBulan = ' November ';
            break;
        case 12:
            namaBulan = ' Desember ';
            break;
    }
    console.log(namaBulan.trim());

    // Menggunaan sort secara descending
    var tempMonth = [];
    for(var i=0;i<month.length;i++){
        tempMonth[i]=month[i];
    }
    tempMonth.sort(function(value1, value2) { return value2 - value1 ;});
    console.log(tempMonth);

    // Menggunakan join
    console.log(month.join('-'));

    //Menggunakan slice
    console.log(arr[1].slice(0,15));
}

dataHandling2(data);