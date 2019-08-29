// function mostFrequentItem(arr){
//   var obj = {}
//   for(var i = 0; i < arr.length; i++){
// //     console.log(arr[i])
//     if(obj[arr[i]] === undefined){
//       obj[arr[i]] = 1
//     } else {
//       obj[arr[i]] += 1
//     }
//   }
  
//   var result = "";
//   var keys = Object.keys(obj);
//   var value = Object.values(obj);
//   // console.log(value.sort())
//   for(var j = 0; j < keys.length; j++){
//     result += keys[j] + "(" + value[j] + ")" + ", "
//   }
//   return result
// }

// console.log(mostFrequentItem(['asus', 'asus', 'samsung', 'iphone', 'iphone', 'asus', 'asus'])); // 'samsung(1), iphone(2) , asus(4)'
// console.log(mostFrequentItem(['9', 'b', 'b', 'c', '9', '9', 'b', '9', '2', '2'])); // 'c(1) , 2(2) ,b(3) ,9(4)'
// console.log(mostFrequentItem(['book', 'laptop', 'iPod'])); // 'book(1), laptop(1), iPod(1)'

// //hitung jumlah barang di dalam array
// //tampilkan berdasarkan dari yang terkecil ke tersebsar
// //sayangnya ini masih salah karena belum di sort

// var height = 5;

// for (var i = 0; i < height; i++) {
//   var str = "";
//   for(var j = 0; j < height; j++){
//     if(i === 0 || j === height-1 || j === 0 || i === height-1){
//       str += "#"
//     } else {
//       str += " "
//     }
//   }
//   console.log(str)
// }

// function square(n){

//   for(var i = 0; i < n; i++){
//     // console.log(i)
//      var str = "";
//     for(var j = 0; j < n; j++){
//       if(i === 0 || i === n-1 || j === 0 || j === n-1){ // baris , baris || kolom, kolom
//         str += "*"
//       } else {
//         str += " "
//       }
//     }
//     console.log(str)
//     // return str (kalau mau di return pake str += "\n" baru bisa)
//   }
// }
// square(4)
// // console.log(square(4))

// var num = 60
// for(var i = 1;i <= num; i++){
//   // console.log(i)
//   var str = String(i);
//   var check = true;
//   for(var j = 0; j < str.length; j++){
//     if(str[j] === "5"){
//       check = false;
//       console.log(" ");
//     }
//   }
//   if(check === true){
//     console.log(i);
//   }
// }

// var str = "flower";

// console.log(str[str.length/2])

// function angkaTerkecil(str){

// var result = [];
//   for(var i = 0; i < str.length; i++){
//     var num = Number(str[i]);
//     // console.log(num)
//     result.push(num)
//   }

// var min = result[0];
// // console.log(min)
//   for (var j = 0; j < result.length; j++) {
//     // console.log(typeof(result[j]))
//     if(min > result[j]){
//       min = result[j];
//     }
//   }
//   return min
// }
// console.log(angkaTerkecil("783129"))

// function angkaTerkecil(str){
//   var strNum = Number(str[0]);
//   // console.log(typeof(strNum))
//   for(var i = 0; i < str.length; i++){
//     var num = Number(str[i]);
//     if(strNum > num){
//       strNum = num
//     }
//   }
//   return strNum
// }
// console.log(angkaTerkecil("783129"));

//hampir sama seperti array tapi awalnya str nya angka pertama diubah menjadi number dulu baru str index diganti menjadi number
//increment jangan lupa hehe

//untuk mencari max number di dalam string!
function angkaTerkecil(str){
  var max = 0; 
  for(var i = 0; i < str.length; i++){
    // console.log(typeof(str[i]))
    var strNum = Number(str[i]);
    // console.log(typeof(strNum))
    if(max < strNum){
      max = strNum;
    }
  }
  return max;
}
console.log(angkaTerkecil("783129"));



