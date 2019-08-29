var coffeCup = {
  colour: ['red', 'white', 'blue'],
  tall: 88,
  diameter: 9,
  material: 'plastic'
}

/* OUTPUT: 
colour is red, white, blue
tall is 88
diameter is 9
material is plastic
*/

//Get all properties of object
var properties = Object.keys(coffeCup); // ['colour', 'tall', 'diameter', 'material'] -> array string 

// console.log(coffeCup[properties[1]]); // coffeCup['tall'] -> 88
console.log(coffeCup[properties[0]]);


for (var i=0; i<properties.length; i++) {
    // console.log(properties[i]);
    if (properties[i] === 'colour') {
        // console.log(properties[i], "is", coffeCup[properties[i]]);
        var tampung = '';
        var allColour = coffeCup[properties[0]];
        for (var j=0; j<allColour.length; j++) {
            tampung += allColour[j] + ', ';
        } 
        console.log(properties[i] + ' is ' + tampung.substr(0, tampung.length-2));
        
    }
    else {
        console.log(properties[i], 'is ', coffeCup[properties[i]]);
    }
}

// CARA YOKI: 
// for (var i = 0; i < properties.length; i++) {
//   if(properties[i] === 'colour'){
//     var tampung = properties[i] + ' is '; 
//     var AllColour = coffeCup[ properties[i]];
//     for (let j = 0; j < AllColour.length; j++) {
//       tampung += AllColour[j]+", ";
//     }
//     console.log(tampung.substr(0, tampung.length-2));
//   }
//   else{
//     console.log(properties[i]+' is '+coffeCup[ properties[i] ]);
//   }
// }


// object kosong
// var identity = { 

// };
// console.log(identity, '<-- bikin object kosong'); 

// // ADD new key to object
// identity.name = 'hedya';
// identity['name'] = 'hedya';
// identity.brothers = 1;
// console.log(identity, '<-- ADD new key'); 


// // RE-ASSIGN value
// identity.brothers = 2;
// console.log(identity, '<-- Reassign value');

// // ADD new value to array object
// identity.broName = [];
// identity.broName.push('Ferry');
// console.log(identity);

var proxitiaJob = [
    { 
      name: 'Ksatria',
      weapon: ['pedang','tombak']
    }, // index 0
    {
      name: 'Tabid',
      weapon: ['gada']
    }, // index 1
    {
      name: 'Penyihir',
      weapon: ['tongkat']
    } // index 2
  ]

