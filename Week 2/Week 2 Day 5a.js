function bandingkanAngka(a, b) {
    if (a < b){
        return true;
    }
    else if ( a === b){
        return -1;
    }
    else if( a > b){
        return false;
    }
    else 
        return false;
}

  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false