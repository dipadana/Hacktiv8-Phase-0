// Live Coding Week 4 - Question 1
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

    /*
    ////////////
    sumTheNumber
    ////////////
    Function sumTheNumber akan menentukan jumlah dari angka-angka dalam suatu string.
    Function akan menerima 1 parameter yaitu:
    - stringAngka adalah string yang berisi kumpulan data, tipe datanya string.
    - apabila stringAngka tersebut pada index yang ganjil maka akan ditambahkan
        jumlah kelipatan 2, selain itu cukup jumlahkan langsung.
    Function ini akan mengembalikkan nilai number.
    --------
    EXAMPLE:
    --------
    [INPUT]
    var stringNumber = '123456'
    [PROCESS]
    string  : 1   2   3   4   5   6
    index   : 0   1   2   3   4   5
    result  : 1 (2*2) 3 (2*4) 5 (2*6) => 1 + 4 + 3 + 8 + 5 + 12
    [OUTPUT]
    33
    [RULES]
    1. Dilarang menggunakan built in function apapun kecuali .push(), .unshift(), dan di RULES lain.
    2. Diperbolehkan untuk menggunakan built in untuk mengubah tipe data String ke Number, ataupun sebaliknya.
    2. Diasumsikan string selalu ada nilainya dan nilainya positif.
    3. WAJIB menggunakan PSEUDOCODE atau nilai 0.
    */

    /*
    ================================================================*/

    //PSEUDOCODE
    // STORE "input number" with any number string (ex = "123456")
    // STORE "final" with 0
    // STORE "temp" with empty array
    // STORE "count" with 0
    // WHILE "count" <  length of "input number" 
    //  SET "temp" with converted string of "input number" to real number
    //  IF "count" MOD 2 NOT EQUALS TO 0
    //      DO "final" ADD with (temp["count"] TIMES 2)
    //  ELSE 
    //      DO "final" ADD with temp["count"]
    //  END IF
    //  ADD "count" by 1
    //  DISPLAY "final" as result

    function sum(number){
        var final = 0;
        var temp = [];
        for(var i = 0; i < number.length; i++){
            temp[i] = Number(number[i])
            if(i%2 != 0){
                final += temp[i]*2
            }
            else{
                final += temp[i]
            }
        }
        return final;
    }

    console.log(sum('123456'));