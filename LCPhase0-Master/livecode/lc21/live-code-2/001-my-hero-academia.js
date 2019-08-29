/*
Absolute Winner!

Pada sebuah turnamen ada 3 orang yang berkompetisi untuk menjadi juara utama.
Apabila jumlah 'Bakugo' dalam array lebih besar dari jumlah 'Midoriya' dan 'Todoroki', maka function akan mereturn "Bakugo won the tournament!".
Apabila jumlah 'Midoriya' dalam array lebih besar dari jumlah 'Bakugo' dan 'Todoroki', maka function akan mereturn "Midoriya won the tournament!".
Apabila jumlah 'Todoroki' dalam array lebih besar dari jumlah 'Bakugo' dan 'Midoriya', maka function akan mereturn "Todoroki won the tournament!".
Apabila ada jumlah yang sama dan jumlah tersebut merupakan jumlah terbesar, tampilkan "There are no clear winner!";


[RULE]
- Wajib menuliskan algoritma/pseudocode. Tidak ada algoritma / algoritma tidak match dengan kode maka indikasi soal tidak diselesaikan secara pribadi dan tidak akan dinilai.
- Dilarang menggunakan Regex (.match, .test, dan sebagainya)
- Dilarang menggunakan method .filter, atau .reduce!

pseudocode:

STORE Midoriya with the value of 0
STORE Bakugo with the value of 0
STORE Todoroki with the value of 0

IF winners.length is empty THEN 
    DISPLAY "There are no clear winner!"

    ELSE 
        FOR LOOP winners 
            IF winners indeks i is equal to Midoriya THEN 
                Midoriya + 1
            ELSE IF winners indeks i is equal to Bakugo THEN 
                Bakugo + 1
            ELSE IF winners indeks i is equal to Todoroki THEN
                Todoroku + 1
            END IF
        EXIT LOOP

        IF Bakugo is larger than Midoriya AND Bakugo is larger then Todoroki THEN
            DISPLAY "Bakugo won the tournament!"
        ELSE IF Midoriya > Bakugo AND MIdoriya > Todoroki THEN
            DISPLAY "Midoriya won the tournament!"
        ELSE IF Todoroki > Midoriya AND Todoroki > Bakugo THEN
            DISPLAY "Todoroki won the tournament!"
        END IF 

*/

// function absoluteWinner (winners) {

//     var Midoriya = 0;
//     var Bakugo = 0;
//     var Todoroki = 0;

//     if(!winners.length){
//         return "There are no clear winner!";
//     } else {
//         for (var i = 0; i < winners.length; i++) {
//             // console.log(winners[i])
//             if(winners[i] === "Midoriya"){
//                 Midoriya++;
//             } else if (winners[i] === "Bakugo"){
//                 Bakugo++;
//             } else if (winners[i] === "Todoroki"){
//                 Todoroki++;
//             }
//         }

//         if(Bakugo > Midoriya && Bakugo > Todoroki){
//             return "Bakugo won the tournament!";
//         } else if (Midoriya > Bakugo && Midoriya > Todoroki){
//             return "Midoriya won the tournament!";
//         } else if (Todoroki > Midoriya && Todoroki > Bakugo){
//             return "Todoroki won the tournament!";
//         }
        
//     }

// }



function absoluteWinner (winners) {
    var countBa = 0;
    var countMi = 0;
    var countTo = 0;

    if(winners.length === 0){
        return 'There are no clear winner!'
    }

    for(var i = 0; i < winners.length; i++){
        if(winners[i] === 'Bakugo'){
            countBa++
        }else if(winners[i] === 'Midoriya'){
            countMi++
        }else if(winners[i] === 'Todoroki'){
            countTo++
        }
    }

    if(countBa > countMi && countBa > countTo){
        return 'Bakugo won the tournament!'
    }if(countMi > countBa && countMi > countTo){
        return 'Midoriya won the tournament!'
    }if(countTo > countMi && countTo > countBa){
        return 'Todoroki won the tournament!'
    }
}




console.log(absoluteWinner(['Bakugo', 'Bakugo', 'Midoriya'])); // "Bakugo won the tournament!"
console.log(absoluteWinner(['Todoroki', 'Bakugo', 'Midoriya', 'Todoroki'])); // "Todoroki won the tournament!"
console.log(absoluteWinner(['Midoriya', 'Midoriya', 'Midoriya'])); // "Midoriya won the tournament!"
console.log(absoluteWinner(['Bakugo'])); // "Bakugo won the tournament!"
console.log(absoluteWinner([])); // "There are no clear winner!"
