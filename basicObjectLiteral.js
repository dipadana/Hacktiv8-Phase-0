var person = {
    nama : 'dipadana',
    belakang : 'putu',
    umur : 20,
    alamat : 'jakarta',
    kelas : 'Hakctiv8',
    namaLengkap : function(){
        return this.nama + ' ' +this.belakang;
    },
    hobi : 'makan',
    kalimat : function(){return this.namaLengkap() + ' hobinya ' + this.hobi}
}

console.log(person.namaLengkap())
console.log(person.kalimat())