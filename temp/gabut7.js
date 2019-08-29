// var num = 5; //Banyak ulang sekian kali
var banyak = 5;
var temp = '';
// for(var i = 0; i < banyak; i++){
//     for(var j = 0; j < num; j++){
//         temp += i;
//         console.log(temp);
//     }
// }

var k = 0;
for(var j = 0; j < banyak; j++){
    for(var i = 1; i <= banyak; i++){
        
        if((i+k)%3 == 0){
            temp += '* ';
        }
        else if((i+k)%2 == 0 ){
            temp += '@ ';
        }
        else if((i+k)%2 != 0){
            temp += '$ ';
        }
        
    }
    console.log(temp);
    k+=5;
    temp = '';
}


