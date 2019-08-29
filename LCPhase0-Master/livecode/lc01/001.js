/**
  Kompetensi: Berpikir secara terstruktur dalam menyelesaikan masalah (algoritma)

  Buatlah pseudocode untuk kasus berikut:

  Sebuah taman bermain akan memberikan tarif sesuai dengan tinggi dan umur anak
  dengan ketentuan sebagai berikut:
  - Umur 2-3 tahun: Rp 20.000. Jika tinggi anak umur 2-3 tahun melebih 70cm maka tarif akan bertambah 10.000
  - Umur 4-7 tahun: Rp 35.000. Jika tinggi anak umur 4-7 tahun melebih 120cm maka tarif akan bertambah 15.000
  - Umur 8-10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun melebih 150cm maka tarif akan bertambah 20.000

  Tampilkan tarif harga sesuai umur dan tinggi seorang anak

**/


//WRITE YOUR PSEUDOCODE HERE

STORE and SAVE 'umur' with any value
STORE and SAVE 'tinggi' with any value
STORE and SAVE 'tarif' with 0
    IF 'umur' equal between 2-3
        ADD 'tarif' with 20000
            IF 'tinggi' more than 70
                ADD 'tarif' with 10000
    IF 'umur' equal between 4-7
        ADD 'tarif' with 35000
            IF 'tinggi' more than 120
                ADD 'tarif' with 15000
    IF 'umur' equal between 8-10
        ADD 'tarif' with 50000
            IF 'tinggi' more than 150
                ADD 'tarif' with 2000
    SHOW and DISPLAY 'tarif'
