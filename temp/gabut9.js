function kotak(num){
    var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    var output = [];
    k = 0;

    for(var i = 0; i < num; i++){
        var row = [];
        for(var j = 0; j < num; j++){
            // row[j] = abjad[k]; //same with bottom
            // var k = (i * num + j)%26
            row.push(abjad[k]);
            k++;
            if(k >= 26){
                k = 0;
            }
        }
        
        output.push(row);
    }
    return output;
}

console.log(kotak(6));