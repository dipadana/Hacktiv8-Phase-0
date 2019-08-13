// Melee Ranged Grouping
function meleeRangedGrouping (str) {
    var output = [[],[]];
    var arr = str.split(',')
    for(var i = 0; i < arr.length; i++){
        if(arr[i].indexOf('Ranged') != -1){
            output[0].push(arr[i].substring(0,arr[i].length-7))
        }
        else if(arr[i].indexOf('Melee') != -1){
            output[1].push(arr[i].substring(0,arr[i].length-6))
        }
    }
    if(str == ''){
        return [];
    }
    return output;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []