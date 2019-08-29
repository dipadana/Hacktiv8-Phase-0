var proxitiaJob = [
  { 
    name: 'Ksatria',
    weapon: ['pedang','tombak']
  },
  {
    name: 'Tabid',
    weapon: ['gada']
  },
  {
    name: 'Penyihir',
    weapon: ['tongkat']
  }
]

// kalau array, mau diperlaukan secara object -> index adalah Keys, values yah nilainya
// index array tidak bisa diperlakukan secara looping untuk dapetin urutan indexnya


// console.log(proxitiaJob[1]['weapon']);



function inGame(name, job, weaponInput){
  if (name === '') { // TAMBAH CONDITION undefined!!
    console.log('Silahkan isi nama kamu');
  }
  else {
    if (job === 'Ksatria' || job === 'Tabib' || job === 'Penyihir') {
      console.log('Selamat datang',name, ', kamu login sebagai ' + job);
      // if weapon tidak sesuai
      // console.log(job, 'job');
      for (var i=0; i<proxitiaJob.length; i++) {
        // console.log(proxitiaJob[i], 'log');
        // console.log(job);
        if (proxitiaJob[i].name === job); {
          console.log(job);
        }
        
      }
      
      // else if sesuai:

    }
    else {
      console.log('Silahkan pilih salah satu dari job {Ksatria}, {Tabid}, {Penyihir}');
    }
  }
}

inGame('Yoki', 'Ksatria', 'tongkat');
// inGame('Yoki', 'Tabib', 'tongkat');
// inGame('', '', 'tongkat');
// inGame('', 'ksatria', 'tongkat');

/*
cek jika nama empty string tampilkan 
  'Silahkan isi nama kamu'

cek jika job tidak sesuai option tampilkan 
  'Silahkan pilih salah satu dari job {Ksatria}, {Tabid}, {Penyihir}'
jika job sesuai option tampilkan pesan
  'Selamat datang {nama} kamu login sebagai {job}'
  
cek jika weapon tidak sesuai job maka tampilkan
  '{job} {nama} kamu tidak dapat menggunakan {weapon} sebagai senjatamu'
jika weapon sesuai maka tampilkan
  '{job} {nama} kamu menggunakan {weapon} sebagai senjatamu'



*/