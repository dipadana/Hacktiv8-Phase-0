/*
    ==================
    Range Prime Number
    ==================

    [INSTRUCTION]
    jika ditanya berapa angka prima yg pertama maka jawabannya adalah 2.
    yang mana prime[0] = 2; 
    maka :
    
    [EXAMPLE]
    jika 10 angka prime pertama : [2,3,5,7,11,13,17,19]
    jika angka prime index ke-4 sampai index ke-11 maka : [11,13,17,19,23,29,31]
    
    diberikan 2 parameter "start","finish"
    "start" yaitu index angka prime yang ditentukan.  
    "finish" yaitu batas index angka prime 

    hasil akhirnya adalah deret angka prime yg telah ditentukan batasnya dalam bentuk array

*/

function rangePrimeNumber(start,finish){
    var counter = 0;
    var collect = [];

    var i = 2;
    while(counter < finish){
        var prime = true;
        for(var j = 2; j < i; j++){
            if(i%j === 0){
                prime = false;
            }
        }
        if(prime === true){
            counter++
            collect.push(i)
        }
        i++
    }
    return collect.slice(start-1)
}

console.log(rangePrimeNumber(5,10))
// output 
// [11,13,17,19,23,29]

console.log(rangePrimeNumber(4,9));
// output [7,11,13,17,19,23]