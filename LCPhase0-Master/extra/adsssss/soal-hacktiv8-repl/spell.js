/*
ALGORITHM 

1. hitung setiap kata
2. bandingkan dengan jumlah kata yang dimiliki di dlaam object

*/

function invokeSpell (input) {
  const spells = [
      { q: 3, w: 0, e: 0, spellName: 'Cold Snap' },
      { q: 0, w: 2, e: 1, spellName: 'Alacrity' },
      { q: 1, w: 0, e: 2, spellName: 'Forge Spirit' },
      { q: 0, w: 0, e: 3, spellName: 'Sunstrike' },
      { q: 1, w: 2, e: 0, spellName: 'Tornado' },
      { q: 0, w: 3, e: 0, spellName: 'EMP' },
      { q: 0, w: 1, e: 2, spellName: 'Chaos Meteor' },
      { q: 1, w: 1, e: 1, spellName: 'Deafening Blast' },
      { q: 2, w: 0, e: 1, spellName: 'Ice Wall' },
      { q: 2, w: 1, e: 0, spellName: 'Ghost Walk' },
  ];

  // your code here

  var countW = 0;
  var countQ = 0;
  var countE = 0;

  for (var i = 0; i < input.length; i++) {
    // console.log(input[i])
    if(input[i] === "q"){
      countQ += 1
    } else if (input[i] === "w"){
      countW += 1
    } else if(input[i] === "e"){
      countE += 1
    } else if (input[i] !== "q" || input[i] !== "w" || input[i] === "e"){
      return "Combination does not exist!"
    }
  }

  for (var j in spells) {
    // console.log(Object.keys(spells[j]))
    if(countQ === spells[j].q && countE === spells[j].e && countW === spells[j].w){
      return spells[j].spellName
    } 
  }
}

console.log(invokeSpell('qwe')); // Deafening Blast
console.log(invokeSpell('ewq')); // Deafening Blast
console.log(invokeSpell('qqq')); // Cold Snap
console.log(invokeSpell('wwq')); // Tornado
console.log(invokeSpell('wwe')); // Alacrity
console.log(invokeSpell('wew')); // Alacrity
console.log(invokeSpell('wqa')); // Combination does not exist