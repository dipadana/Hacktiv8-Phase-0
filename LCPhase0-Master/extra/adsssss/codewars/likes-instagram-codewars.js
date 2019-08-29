
// function likes(names) {
  
//   var count = 0
//   if(names.length === 0){
//     return "no one likes this"
//   } else {
//      var str = names[2] + " " + names[names.length - 1];
// //       console.log(str.split(" "))
//       var len = str.split(" ").length;
//     for(var i = 0; i < names.length; i++){

//       if(names.length === 1){
//         return names[i] + " likes this"
//       } else if (names.length === 2){
//         return names[i] + " and " + names[i+1] + " likes this"
//       } else if(names.length === 3){
//         return names[i] + ", " + names[i+1] + " and " + names[i+2] + " like this"
//       } else if (names.length >= 4){
// //         var count = names.lastIndexOf()
//         count+= 1
//         return names[i] + ", " + names[i+1] + " and " +  count + " others like this"
//       }
//     }
//   }
// }

// console.log(likes([])); //'no one likes this'
// console.log(likes(['Peter'])); //'Peter likes this'
// console.log(likes(['Jacob', 'Alex'])); //'Jacob and Alex like this'
// console.log(likes(['Max', 'John', 'Mark'])); //'Max, John and Mark like this'
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); //'Alex, Jacob and 2 others like this'