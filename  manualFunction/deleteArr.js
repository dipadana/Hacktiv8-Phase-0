function deleteArr(arr,start,remove){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(i != start){
      output.push(arr[i])
    }
  }
  return output;
}

var arr = [0,1,2,0,3,4,5];
console.log(deleteArr(arr,3)) //[0,1,2,3,4,5]