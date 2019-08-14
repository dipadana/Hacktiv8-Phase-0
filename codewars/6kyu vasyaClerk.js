function tickets(arr){
    var a = 0; //25
    var b = 0; //50
    var c = 0; //100
    for(var i = 0; i < arr.length; i++){
        if(arr[i] == 25){
            a++;
        }
        else if(arr[i] == 50 && a > 0){
            a--;
            b++;
        }
        else if(arr[i] == 100 && a >= 1 && b >= 1){
            a--;
            b--;
            c++;
        }
        else if(arr[i] == 100 && a >= 3){
            a-=3;
            c++;
        }
    }
    if(((a*25)+(b*50)+(c*100)) == arr.length*25){
        return 'YES'
    }
    else{
        return 'NO'
    }
}

console.log(tickets([25, 25, 50])) // => YES 
console.log(tickets([25, 100])) // => NO. Vasya will not have enough money to give change to 100 dollars
console.log(tickets([25, 25, 50, 50, 100])) // => NO. Vasya will not have the right bills to give 75 dollars of change (you can't make two bills of 25 from one of 50)