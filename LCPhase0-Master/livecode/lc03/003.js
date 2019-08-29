/*
    ============
    PAIR PROJECT 
    ============

    [INSTRUCTION]
    saat nya phase 0 mengerjakan project secara pair ( berpasangan / berdua ). 
    dalam pembagian kelompok student, ada kriteria yang harus dipenuhi yaitu 
    setiap kelompok yang dipasangkan harus memiliki huruf depan ( inisial ) yang 
    BERBEDA. 
    
    pada kelas ini , jumlahnya selalu genap dan murid yang memiliki inisial yang sama 
    tidak lebih dari 2 orang

    ketentuan : 
    - jika murid berjumlah ganjil output : "Jumlah murid harus genap"
    - tambahkan test case lain bila diperlukan 

    [Example]
    input : ["asep","baqi","jajang","junaedi","iqbal","toni"]
    output : ["asep and baqi","jajang and iqbal","junaedi and toni"]

    [RULE]
    - dilarang menggunakan build in function array apapun kecuali push() 
    - Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
    - Dilarang menggunakan regex .match dan lainnya!
    - Dilarang menggunakan built in function .indexOf() dan .include()
    
    */
   
function pairProject( students ) {
    
    for(var i = 0; i < students.length-2; i++){
        for(var j = 0; j < students.length-2-i; j++){
            if(j%2 === 1 && students[j][0] === students[j+1][0] && students[j-1][0] !== students[j][0]){
              continue;
            }else if(students[j][0] === students[j+1][0]){
                var temp = students[j+1]
                students[j+1] = students[j+2]
                students[j+2] = temp
            }
        }
    }
    
    var result = [];
    var counter = 0;
    for(var i = 0; i < students.length/2; i++){
        var temp = students[counter] + ' dan ' + students[counter+1]
        counter+=2
        result.push(temp)
    }

    if(students.length%2 === 1){
        return 'Jumlah murid harus genap'
    }
    return result
}

console.log( pairProject(["Aries","Awtian","Momotaro","Yoki","Icha","Wika","Wawan","Mimin","Ryan","Yogi"]) )
/* 
[ 'Aries and Momotaro',
  'Awtian and Yoki',
  'Icha and Wika',
  'Wawan and Mimin',
  'Ryan and Yogi' ]
*/

console.log( pairProject(["asep","baqi","jajang","junaedi","iqbal","toni"]) )
/* 
    ["asep and baqi","jajang and iqbal","junaedi and toni"]
*/

console.log( pairProject(["asep","baqi","jajang","iqbal","toni"]) )
/* 
    ["Jumlah murid harus genap"]
*/