// var height = 5;

// for (var i = 0; i < height; i++) {
// 	var str = "";
// 	for (var j = 0; j < height; j++) {
// 		if(i === 0 || i === height-1 || j === 0 || j === height-1){
// 			str += "*"
// 		} else {
// 			str += " "
// 		}
// 	}
// 	console.log(str)
// }

function kotakEX (height){

    if(height < 5){
        return "Invalid Input!";
    } 

    else {
        for (i = 1; i <= height; i++){ 
            var str = "";
            for (j = 1; j <= height; j++) 
            { 
                if (i==1 || i==height || j==1 ||  
                    j==height || i==j || j==(height - i + 1))             
                    str += "*";           
                else            
                   str += " ";         
            } 
            console.log(str);
        } 
    }
}

kotakEX(kotakEX(5))
