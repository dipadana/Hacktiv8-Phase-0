// // function prime(num){
//     var x = '';
//     if(num == 3 || num == 5 || num == 7 || num == 2){
//         return true;
//     }
//     else if(num <= 0){
//         return false
//     }
//     else if(num%2==0 || num == 1){
//         return false;
//     }
//     else if(num > 1000000){
//         for(var i = 0; i <= num; i++){
//             x = num%i+2;
//             console.log(i)
//             if(x == 0){
//                 return false;
//             }
//             x = '';
//         }
//         return true
//     }
//     else if(num%3!=0 && num%5!=0 && num%7!=0 && num%9!=0 && num%11!=0 && num%13!=0 && num%1==0 && num%num==0){
//         console.log('satu')
//         return true;
//     }
//     else{
//         return false;
//     }

//     var x = '';
//     if(num <= 0){
//         return false;
//     }
//     else{
//         for(var i = 0; i <= num; i++){
//             x = num%i+2;
//             console.log(i)
//             if(x == 0){
//                 return false;
//             }
//             x = '';
//         }
//         return true
//     }
// }

const isPrime = num => {
    for(var i = 2, s = Math.sqrt(num); i <= s; i++)
    console.log(i)    
    if(num % i === 0) return false; 
    return num > 1;
}

// for(var i = 1; i < 21; i++){
    console.log( 'adalah', isPrime(5099));
// }
