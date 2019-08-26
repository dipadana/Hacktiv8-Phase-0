/*
  //////////////////
  SUPER SHOOT SOCCER
  //////////////////
  Function Super Shot Soccer akan menunjukkan juara dari kompetisi sepak bola. Fungsi ini
  akan menerima parameter berupa array of object, dan mengembalikan nilai berupa object urutan juara.
  EXAMPLE
  INPUT: [
    {Name: 'Hideous', Power: 100, Club: 'Germany'},
    {Name: 'Sakuragi', Power: 84, Club: 'Japan'},
    {Name: 'Kira', Power: 40, Club: 'Korea'},
    {Name: 'Andre', Power: 59, Club: 'Egypt'}
  ]
  NOTES:
    - Juara ditentukkan berdasarkan nilai powernya
    - Input array of object selalu ada value object orangnya
  PROCESS:
    - Germany => 100
    - Japan => 84
    - Korea => 40
    - Egypt => 59
  OUTPUT: {
    'Juara 1': 'Germany',
    'Juara 2': 'Japan',
    'Juara 3': 'Egypt',
    'Juara 4': 'Korea'
  }
  RULES:
    - Hanya boleh menggunakan built in function .push()
    - Asumsi setiap club tidak akan memiliki lebih dari 1 pemain
    - Asumsi jumlah power dari setiap club berbeda
*/

// Menggunakan sort object buatan sendiri, 
// berdasarkan bubble sort
function sortAsc(arr, key, sort = 'asc'){
  var array = Object.keys(arr[0]);  
  var key = array[key];

  var max = 0;
    for(var i = 0; i < arr.length-1; i++){
        for(var j = i+1; j < arr.length; j++){
          if(sort == 'dsc'){
            if(arr[i][key] < arr[j][key]){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
            }
          }
          else{
            if(arr[i][key] > arr[j][key]){
              max = arr[i];
              arr[i] = arr[j];
              arr[j] = max;
            }
          }
            

        }
    }
    return arr;
}

// Fungsi utama untuk menentukan fungsi proses perhitungan
function superShootSoccer(arr){
  // Sort arrayOfObject berdasarkan power
  sortAsc(arr, 1, 'dsc')

  // Lalu langsung diproses outputnya,
  // dan langsung di return
  var output = {};
  for(var i = 0; i < arr.length; i++){
    output[`Juara ${i+1}`] = arr[i].Club
  }
  return output;
}

// TEST CASE
console.log(superShootSoccer([
  { Name: 'Hideous', Power: 100, Club: 'Germany' },
  { Name: 'Sakuragi', Power: 84, Club: 'Japan' },
  { Name: 'Kira', Power: 40, Club: 'Korea' },
  { Name: 'Andre', Power: 59, Club: 'Egypt' }
]))
// { 'Juara 1': 'Germany',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Egypt',
//   'Juara 4': 'Korea' }

console.log(superShootSoccer([
  { Name: 'Hideous', Power: 20, Club: 'Germany' },
  { Name: 'Sakuragi', Power: 77, Club: 'Japan' },
  { Name: 'Kira', Power: 41, Club: 'Korea' },
  { Name: 'Andre', Power: 84, Club: 'Egypt' }
]))
// { 'Juara 1': 'Egypt',
//   'Juara 2': 'Japan',
//   'Juara 3': 'Korea',
//   'Juara 4': 'Germany' }