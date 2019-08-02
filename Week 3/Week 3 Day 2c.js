var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

function dataHandling(nomor, nama, tempat, tl, hobi){
    console.log('Nomor ID : ' + nomor);
    console.log('Nama Lengkap : ' + nama);
    console.log('TTL : ' + tempat + ' ' + tl);
    console.log('Hobi : ' + hobi);
    
}

for(i=0;i<input.length;i++){
    dataHandling(input[i][0],input[i][1],input[i][2],input[i][3],input[0][4])
    if(i < input.length-1){
        console.log(' ')
    }
}