function soal3(param) {
    var obj = {
        under20: [],
        over20: []
    }

    for (var i=0; i<param.length; i++) {
        // console.log(param[i][1]);
        if (param[i][1] < 20) {
            // console.log(param[i][1]);
            // console.log(obj.under20, 'obj');
            obj.under20.push(param[i][0])
        }
        else {
            obj.over20.push(param[i][0])
        }
        
    }

    return obj
    
}

/*

*/
console.log(soal3([
    ["dimas",17],
    ["akbar",28],
    ["rifki",30],
    ["dimitri",18],
    ["saitama",19]
]));

/*
    {
        under20:["dimas",'dimitri','saitama'],
        over20:["akbar","rifki"]
    }
*/

// time: 5 mins