var nama = 'Dipa';
var peran = 'Tabib';

if (nama == false && peran == false){
  console.log('Nama harus diisi!');
}
else if (nama && peran == false){
  console.log('Halo ' + nama + ', pilih peranmu untuk memulai game!');
}
else if (nama && peran === 'Ksatria'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Ksatria ' + nama + ', kamu dapat menyerang dengan senjatamu!');
}
else if (nama && peran === 'Tabib'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Tabib ' + nama + ', kamu akan membantu temanmu yang terluka.');
}
else if (nama && peran === 'Penyihir'){
  console.log('Selamat datang di Dunia Proxytia, ' + nama);
  console.log('Halo Penyihir ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
}
else if (nama == false && peran){
  console.log('Nama harus diisi!');
}
else{
  console.log('Error Input');
}