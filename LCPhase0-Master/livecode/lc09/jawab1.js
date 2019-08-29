function arrayInjector (firstData, index, secondData) {
  var tampung= []
  for(var i=0; i< firstData.length;i++){
    if( i==index){
       for( var j=0; j< secondData.length;j++){
         tampung.push(secondData[j])
       }
    }
    tampung.push(firstData[i])
  }
  return tampung
}
   
   console.log(arrayInjector([1, 5, 6], 1, [2, 3, 4]));//  [1, 2, 3, 4, 5, 6, 7]
   console.log(arrayInjector([10, 20, 70], 2, [30, 40, 50, 60]));
   // [10, 20, 30, 40, 50, 60, 70]
   console.log(arrayInjector(['Dimitri', 'Alexei', 'Alexander', 'Alisa'], 3, ['Dragunov']));
   // ['Dimitri', 'Alexei', 'Alexander', 'Dragunov', 'Alisa']
