/* 
===============
Number Triangle
===============
​
Instruction:
Buatlah sebuah proses untuk membuat deret angka yang membentuk segitiga seperti contoh berikut.
​
Contoh 1 (height = 5):
Output:
12345
2345
345
45
5
​
Contoh 2 (height = 3):
Output:
123
23
3
​
Contoh 3 (height = 1):
Output:
1
 */

var height = 8;
// Write code here

var temp = '';
for(var j = 0; j < height; j++){
    for(var i = 1; i <= height-j; i++){
        temp += i+j;
    }
    console.log(temp)
    temp = '';
}