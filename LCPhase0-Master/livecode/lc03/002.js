/* 
=================
StandBackTriangel
=================

Standback Triangel adalah program untuk mengegenerate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya 

[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga. 

[Example]
jika width = 3 maka : 

123 <-- width 
  o
 oo
o o
 oo
  o

[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()


*/

// 1. TANPA RETURN

function standBackTriangel(width) {
  
  for(var i = 0; i < width; i++){
    var result = '';
    for(var j = 0; j < width-i-1; j++){
      result += ' '
    }
    
    for(var k = 0; k <= i; k++){
      if(k === 0 || k === i){
        result += 'o'
      }else{
        result += ' '
      }
    }
    console.log(result)
  }

  for(var i = 0; i < width-1; i++){
    var result = ''
    for(var j = 0; j <= i; j++){
      result += ' '
    }

    for(var k = 0; k <= width-i-2; k++){
      if(k === 0 || k === width-i-2){
        result += 'o'
      }else{
        result += ' '
      }
    }
    console.log(result)
  }
}
 
 standBackTriangel( 3 )
 standBackTriangel( 5 )


// 2. DENGAN RETURN


function standBackTriangel(width) {
  
  var result = '';
  for(var i = 0; i < width; i++){
    for(var j = 0; j < width-i-1; j++){
      result += ' '
    }
    for(var k = 0; k <= i; k++){
      if(k === 0 || k === i){
        result += 'o'
      }else{
        result += ' '
      }
    }
    result += '\n'
  }

  for(var i = 0; i < width-1; i++){
    // var result = ''
    for(var j = 0; j <= i; j++){
      result += ' '
    }
    for(var k = 0; k <= width-i-2; k++){
      if(k === 0 || k === width-i-2){
        result += 'o'
      }else{
        result += ' '
      }
    }
    result += '\n'
  }
  return result
}
 
 console.log(standBackTriangel( 3 ))
 console.log(standBackTriangel( 5 ))
 
 /*
 input:5
  
     o 
    oo 
   o o 
  o  o 
 o   o 
  o  o 
   o o 
    oo 
     o 
 
 input:3
 
   o 
  oo 
 o o 
  oo 
   o 
 
 
 */