var arr = [0,1,0,0,2,3,'0',4,5,6];
var arr1 = [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14];
var arr2 = [1,"0","0","0",0];
var arr3 = [ '0', '0', '0', 0, 1 ];

function myPush(arr,data){
  return arr[arr.length] = data;
}

function deleteArr(arr,start){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(i != start){
      myPush(output, arr[i])
    }
  }
  return output;
}

function remove0(arr){
  for(var j = 0; j < arr.length; j++){
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === 0 || arr[i] === '0'){
        if(arr[i] === 0) myPush(arr,0);
        else if(arr[i] === '0') myPush(arr,'0') ;
        arr = deleteArr(arr,i)
        break;
      }
    }
  }
  return arr;
}

// console.log(arr.splice(0, 1, 'dasda', 'asda'))
console.log(arr3)
console.log(remove0(arr3))
for(var i = 0; i < arr3.length; i++){
  console.log(typeof arr3[i])
}
// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]