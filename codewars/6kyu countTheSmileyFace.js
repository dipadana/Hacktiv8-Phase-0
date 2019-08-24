function countSmileys(arr) {
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr[i][0] == ':' || arr[i][0] == ';'){
      if(arr[i][arr[i].length-1] == ')' || arr[i][arr[i].length-1] == 'D'){
        if(arr[i].length == 3 && (arr[i][1] == '-' || arr[i][1] == '~')){
          count++;
        }
        else if(arr[i].length == 2){
          count++;
        }
      }
    }
  }
  return arr.length == 0 ? 0 : count;
}

console.log(countSmileys([':D',':~)',';~D',':)'])) // 4
console.log(countSmileys([':)',':(',':D',':O'])) // 2
console.log(countSmileys([ ':---)', '))', ';~~D', ';D' ])) // 1
console.log(countSmileys([])) // 0