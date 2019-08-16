/*
=================
StandBackTriangle
=================
Standback Triangle adalah program untuk men-generate Segitiga yang ujungnya mengarah ke kanan.
dengan character huruf 'o' sebagai sisi nya
[INSTRUCTION]
diberikan input berupa width , yaitu lebar segitiga.
[Example]
jika width = 3 maka :
123 <-- width
  o
 oo
ooo
 oo
  o
[RULE]
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()
*/

var width = 5;
var o = ''
for(var i = 0; i < width; i++){
    for(var j = i; j < i+1; j++){
        o += 'o';
    }
    console.log(o)
}
o = ''
for(var i = 0; i < width-1; i++){
    for(var j = width-1-i; j > 0; j--){
        o+='o';
        
    }
    console.log(o)
    o = ''
}

