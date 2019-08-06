// Merupakan fungsi untuk melakukan reverse kalimat
function balikKalimat(kalimat){
  // Buat sebuah array penampung semetara untuk kalimat
  var tampungKalimat= [];

  // Lalu masukan tiap-tiap huruf dari kalimat secara manual ke dalam array tampungan tadi
  for(i=0;i<kalimat.length;i++){
    tampungKalimat[i]=kalimat[i];
  }

  // Buat satu variable penampung untuk kalimat yang dibalik
  var output = '';

  // Lalu masukkan secara berurutan huruf-huruf yang ada didalam array dari belakang/indeks terbesar
  for(i=kalimat.length-1;i>=0;i--){
    output += tampungKalimat[i];
  }

  // Setelah selesai, tampilkan kalimat hasil reverse
  return output;
}

console.log(balikKalimat("hello world!"));