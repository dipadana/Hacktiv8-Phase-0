  
/*
  ////
  go2D
  ////
  Function go2D akan menentukkan lokasi 2D dari go dalam koordinat, fungsi ini akan menerima
  parameter pertama koordinat i, parameter kedua koordinat j, serta array yang merupakan pergerakkan.
  Pergerakkan hanya ada 4 arah yaitu, 'UP', 'DOWN', 'LEFT', atau 'RIGHT'.
  EXAMPLE
  INPUT: posI = 3, posJ = 3, movements = ['UP', 'RIGHT', 'DOWN']
  EXAMPLE:
      i\j  0  1  2  3  4
      0
      1
      2            1  2
      3            go 3
      4
  PROCESS:
  - go bergerak kearah 'UP' 2, 3
  - go bergerak kearah 'RIGHT' 2, 4
  - go bergerak kearah 'DOWN' 3, 4
  OUTPUT:
  [
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', ' ', ' '],
    [' ', ' ', ' ', '1', '2'],
    [' ', ' ', ' ', 'go', '3'],
    [' ', ' ', ' ', ' ', ' ']
  ]
  RULES:
  1. Asumsi koordinat 4 * 4 dan go tidak pernah bergerak ke luar koordinat 4 x 4
  2. Asumsi go tidak pernah melangkah ke tempat yang sama
  */

  function go2D(x,y,move){
    // Generate field yang kosong,4x4;
    var field = [ 
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ' ] 
    ]

    // Menentukan kordinat awal
    var i = x;
    var j = y;
    field[i][j] = 'go'

    // Melakukan perhitungan dan penentuan arah,
    // lalu di return
    for(var k = 0; k < move.length; k++){
      if(move[k] == 'UP'){
        i -= 1;
        field[i][j] = `${k + 1}`;
      }
      else if(move[k] == 'RIGHT'){
        j += 1;
        field[i][j] = `${k + 1}`;
      }
      else if(move[k] == 'DOWN'){
        i += 1;
        field[i][j] = `${k + 1}`;
      }
      else if(move[k] == 'LEFT'){
        j -= 1;
        field[i][j] = `${k + 1}`;
      }
    }
    return(field);
  }

  // TEST CASE
  console.log(go2D(3, 3, ['UP', 'RIGHT', 'DOWN']))
 // [ [ ' ', ' ', ' ', ' ', ' ' ],
 //   [ ' ', ' ', ' ', ' ', ' ' ],
 //   [ ' ', ' ', ' ', '1', '2' ],
 //   [ ' ', ' ', ' ', 'go', '3' ],
 //   [ ' ', ' ', ' ', ' ', ' ' ] ]
  console.log(go2D(2, 2, ['UP', 'LEFT', 'UP']))
 // [ [ ' ', '3', ' ', ' ', ' ' ],
 //   [ ' ', '2', '1', ' ', ' ' ],
 //   [ ' ', ' ', 'go', ' ', ' ' ],
 //   [ ' ', ' ', ' ', ' ', ' ' ],
 //   [ ' ', ' ', ' ', ' ', ' ' ] ]
  console.log(go2D(2, 3, ['DOWN', 'LEFT', 'LEFT', 'UP', 'UP']))
 // [ [ ' ', ' ', ' ', ' ', ' ' ],
 //   [ ' ', '5', ' ', ' ', ' ' ],
 //   [ ' ', '4', ' ', 'go', ' ' ],
 //   [ ' ', '3', '2', '1', ' ' ],
 //   [ ' ', ' ', ' ', ' ', ' ' ] ]
