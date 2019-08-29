/*
Instruksi
=========
Buatlah sebuah function bernama capitalH yang menjalankan proses dengan menggunakan looping (boleh dengan while atau for) dan menerima satu parameter bernama height.

Buatlah sebuah symbol pola berikut:
contoh 1 ( capitalH(3) ):
| |
|-|
| |

contoh 2 ( capitalH(5) ):
|   |
|   |
|---|
|   |
|   |
 
contoh 3 ( capitalH(6) ):
|    |
|    |
|----|
|----|
|    |
|    |



tinggi huruf dan lebar sesuai dengan nilai parameter height.
garis vertical mengunakan symbol pipeline(|)
garis horizontal mengunakan symbol minus(-)
minimal nilai ganjil adalah 3, untuk nilai genap minimalnya adalah 6

*/

function capitalH(height){
    var mid = Math.floor(height/2)
    
    if(height%2 === 0 && height < 6){
        console.log('Maaf, input number GENAP anda kurang dari 6')
    }else if( height % 2 === 1 && height < 3){
        console.log('Maaf, input number GANJIL anda kurang dari 3')
    }

    for(var i = 0; i < height; i++){
        var result = '';
        for(var j = 0; j < height; j++){
            if(j === 0 || j === height-1){
                result += '|'
            }else if(height % 2 === 1){
                if(i === mid){
                    result += '-'
                }else{
                    result += ' '
                }
            }else if(height % 2 === 0){
                if(i === mid || i === mid -1){
                    result += '-'
                }else{
                    result += ' '
                }
            }

        }
        console.log(result)
    }
}

//Test case
capitalH(3);
capitalH(5);
capitalH(6);
capitalH(9);
capitalH(11);