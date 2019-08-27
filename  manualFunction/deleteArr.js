function deleteArr(arr, nomorIndeksYangInginDihapus){
  var output = [];
  for(var i = 0; i < arr.length; i++){
    if(i !=  nomorIndeksYangInginDihapus){
      output.push(arr[i])
    }
  }
  return output;
}

var arr = [0,1,2,0,3,4,5];
console.log(deleteArr(arr,6)) //[0,1,2,3,4,5]
