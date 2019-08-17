// Live Coding Week 4 - Question 2
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

/*
    /////////////////
    americanGotTalent
    /////////////////
    Function americanGotTalent akan menentukan juara serta jumlah votingnya dari suatu array.
    Function akan menerima 1 parameter yaitu:
        - votes adalah kumpulan string nama, tipe datanya array.
    Function ini akan mengembalikkan nilai string dalam format:
        - Apabila terdapat juara: "Selamat juaranya adalah [nama], dengan total votes yang diterima [totalVotes]".
        - Apabila tidak terdapat juara: "Mohon maaf juara tidak bisa ditentukkan dalam minggu ini".
    ----------
    EXAMPLE 1:
    ----------
    [INPUT]
        var votes = ['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'];
    [PROCESS]
        terdapat 2 voting Lee Min Ho yang paling banyak.
    [OUTPUT]
        Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.
    ----------
    EXAMPLE 2:
    ----------
    [INPUT]
        var votes = ['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'];
    [PROCESS]
        tidak terdapat yang terbanyak.
    [OUTPUT]
        Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
    [RULES]
        1. Dilarang menggunakan built in function apapun kecuali .push(), .pop(), .shift() dan .unshift()
*/

function vote(arr){
    var temp = 0; // Menyimpan sementara jumlah suatu element dalam array
    var temp2 = '';  // Menyimpan element array yang memiliki anggota terbanyak
    var max = 0; 
    var seri = false;
    
    for(var i = 0; i < arr.length; i++){
        
        for(var j = 0; j < arr.length; j++){
            if(arr[i]==arr[j]){
                temp += 1;
            }
        }

        
        if(max < temp){
            temp2 = arr[i];
            max = temp
            seri = false;
        }
        else if(max == temp && temp2 != arr[i]){
            seri = true;
        }
        temp = 0;
        console.log(temp2)
    }

    if(seri == true){
        return 'Mohon maaf juara tidak bisa ditentukan dalam minggu ini';
    }
    else{
        return 'Selama juaranya adalah ' + temp2 + ', dengan total votes yang diterima ' + max + '.';
    }

}

console.log(vote(['Lee Min Ho', 'Arby', 'Darren McFlurry', 'Lee Min Ho'])); 
//Selamat juaranya adalah Lee Min Ho, dengan total votes yang diterima 2.
console.log(vote(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho'])); //Mohon maaf juara tidak bisa ditentukkan dalam minggu ini
console.log(vote(['Lee Min Ho', 'Arby', 'Arby', 'Lee Min Ho', 'Dipadana', 'Dipadana', 'Dipadana'])); 