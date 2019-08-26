function myPush(arr,data){
  return arr[arr.length] = data;
}

arr = [1,2,3]
myPush(arr,4)
console.log(arr) //[1,2,3,4]
