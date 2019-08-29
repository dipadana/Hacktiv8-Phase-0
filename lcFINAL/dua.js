/*

  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar 
  selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan sebuah array 
  satu dimensi berisi data lagu. Output dari function tersebut adalah array 2 dimensi yang 
  menampilkan judul lagu dan jumlah pemutaran terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

  RULES:
  - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/

function mySort(arr){
  var temp = 0;
  for(var i = 0; i < arr.length-1; i++){
    for(var j = i+1; j < arr.length; j++){
        // Rubah tanda '>' menjadi '<' untuk mengurutkan dari besar ke terkecil
      if(arr[i] > arr[j]){
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

function removeDuplicate(arr){
  var output = [];
  mySort(arr);
  for(var i = 0; i < arr.length; i++){
    if(arr[i] != arr[i+1]){
      output.push(arr[i])
    }
  }
  return output;
}

function sortPlaylist(playlist) {
  var dataLagu = removeDuplicate(playlist)
  var output = [];
  for(var i = 0; i < dataLagu.length; i++){
    var count = 0;
    for(j = 0; j < playlist.length; j++){
      if(dataLagu[i] == playlist[j]){
        count++;
      }
    }
    output.push([dataLagu[i],count])
  }
  return output;
}

console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));

//[ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

console.log(sortPlaylist(['Donna Donna', 'Top of The World', 'Donna Donna', 'Top of The World', 'Top of The World', 'Location Unknown', 'Location Unknown']));

//[ [ 'Donna Donna', 2 ], [ 'Location Unknown', 2 ], [ 'Top of The World', 3 ] ]

console.log(sortPlaylist([])); // []