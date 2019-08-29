
function soal1(objList,id,action)
{
    // your code here
    if(action=='view'){
        return objList[id.toString()]
    }
    if (action == 'delete'){

        var proper= Object.keys(objList); // list keys -> 0,1,2,3

        for(let i=id; i< proper.length;i++){ // start dari i yang diilangin
            objList[i]=objList[(i+1)]; // valuenya i => value i+1
        }
        delete objList[proper.length-1];
        return objList;
    }
    

}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"view"));
// { name:"awtian",codename:"the black assasin"}

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"}
},1,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{ name:"icha",codename:"the real dementor"}
    }

*/

console.log(soal1({
    0:{name:"dimas",codename:"surgeon of death"},
    1:{name:"awtian",codename:"the black assasin"},
    2:{name:"icha",codename:"the real dementor"},
    3:{name:"hedya",codename:"the real lol"}
},2,"delete"));
/* 
    { 
        0:{ name:"dimas",codename:"surgeon of death"},
        1:{name:"awtian",codename:"the black assasin"},
        2:{name:"hedya",codename:"the real lol"}
    }

*/

// if (action == 'delete'){
//     delete objList[id.toString()];
//     return objList;

//    }