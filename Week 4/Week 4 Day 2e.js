// Ubah Huruf
function ubahHuruf(kata) {
    var temp = '';
    for(var xo = 0; xo < kata.length; xo++){
        switch(kata[xo]){
            case 'a' : temp += 'b'; break;
            case 'b' : temp += 'c'; break;
            case 'c' : temp += 'd'; break;
            case 'd' : temp += 'e'; break;
            case 'e' : temp += 'f'; break;

            case 'f' : temp += 'g'; break;
            case 'g' : temp += 'h'; break;
            case 'h' : temp += 'i'; break;
            case 'i' : temp += 'j'; break;
            case 'j' : temp += 'k'; break;

            case 'k' : temp += 'l'; break;
            case 'l' : temp += 'm'; break;
            case 'm' : temp += 'n'; break;
            case 'n' : temp += 'o'; break;
            case 'o' : temp += 'p'; break;

            case 'p' : temp += 'q'; break;
            case 'q' : temp += 'r'; break;
            case 'r' : temp += 's'; break;
            case 's' : temp += 't'; break;
            case 't' : temp += 'u'; break;

            case 'u' : temp += 'v'; break;
            case 'v' : temp += 'w'; break;
            case 'w' : temp += 'x'; break;
            case 'x' : temp += 'y'; break;
            case 'y' : temp += 'z'; break;

            case 'z' : temp += 'a'; break;
        }
    }
    return temp;
}

  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu