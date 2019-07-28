function balikKata(kata){

    let length = (kata.length);
    

    let penampung = [];
    for(let i = 0; i < length; i++){
        penampung[i] = kata[i];
    }

    let balikKata = '';
    lengthr = length - 1;
    for(i = lengthr; i >= 0; i--){
        balikKata += penampung[i];
    }
    
    return balikKata;
}

  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS