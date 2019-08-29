
function persegi(param1,param2) {
    if (param1 === 0 || param2 === 0) {
        return 'invalid value';
    }
    else {

        for (var i=0; i<param2; i++) {
            if (i === 0 || i === param2-1) {
                var resultBorder = '' // awal & akhir baris
                for (var j=0; j<param1; j++) {
                    resultBorder += '#'
                }
                console.log(resultBorder);
                
            }
            else {
                resultInside = '';
                for (var k=0; k<param1; k++) {
                    if (k === 0 || k === param1-1) {
                        resultInside += '#';
                    }
                    else {
                        resultInside += ' ';
                    }
                }
                console.log(resultInside);
                
                
            }
            
        }
    }

    
    
}

/*

*/

console.log(persegi(5,7))

/*
    #####
    #   #
    #   #
    #   #
    #   #
    #   #
    #####
*/

console.log(persegi(6,3))

/*
    ######
    #    #
    ######
*/


console.log(persegi(0,7)) // invalid value 
console.log(persegi(4,0)) // invalid value 

// time: 8 mins