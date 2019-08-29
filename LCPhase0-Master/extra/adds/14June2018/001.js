function soal1(objList,id,action)
{
    // your code here
    if(action=='view'){
        var coba={};
        return objList[id.toString()]
    }
   if (action == 'delete'){
    delete objList[id.toString()];
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

// if (action == 'delete'){
//     delete objList[id.toString()];
//     return objList;

//    }