function favoriteColor (input) {
  // your code here
  var mutable = [...input];
  var redCount = 0;
  var yellowCount = 0;
  var blueCount = 0;

  for(var i = 0; i<mutable.length; i++) {
    if(mutable[i] === 'red') redCount += 1;
    if(mutable[i] === 'yellow') yellowCount += 1;
    if(mutable[i] === 'blue') blueCount += 1;
  }

  console.log(redCount, blueCount, yellowCount);
  
  if(input.length < 1) return 'There are no favorite';

  if(redCount > yellowCount && redCount > blueCount) {
  return "red the most favorite"; }
  else if(blueCount > redCount && blueCount > yellowCount) { 
  return 'blue the most favorite'; }
  else if (yellowCount > blueCount && yellowCount > redCount) {
  return 'yellow the most favorite';}
  else return 'There are no clear winner';
  }

/* algorithm
1. Buat 3 variable counter masing-masing untuk red, yellow, dan blue.
2. Loop array input yang diberikan dan berikan +1 untuk setiap elemen yang sesuai dengan red, yellow, atau blue.
3. Bandingkan nilai counter dan berikan return value yang sesuai.
4. Jika ada 2 counter dengan nilai yang sama dan paling besar return 'There are no clear winner'.
5. jika nilai counter tidak dapat dibandingkan return ' There are no favorite'.
*/



console.log(favoriteColor(['red', 'red', 'yellow', 'yellow'])); // "red the most favorite!"
// console.log(favoriteColor(['blue', 'red', 'yellow', 'blue' ,'red'])); // "blue the most favorite!"
// console.log(favoriteColor(['yellow', 'yellow', 'yellow'])); // "yellow the most favorite!"
// console.log(favoriteColor(['red'])); // "red the most favorite!"
// console.log(favoriteColor([])); // "There are no favorite!"
