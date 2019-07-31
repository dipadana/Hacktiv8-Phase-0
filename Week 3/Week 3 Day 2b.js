var kalimat = "hello world!";
var tampungKalimat= [];
for(i=0;i<kalimat.length;i++){
  tampungKalimat[i]=kalimat[i];
}
var output = '';
for(i=kalimat.length-1;i>=0;i--){
  output += tampungKalimat[i];
}
console.log(output);