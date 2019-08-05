/* 
==============
Bilangan Prima
==============
​
Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */
​
// Tulis algoritma di sini
// 1. Tampung sebuah value angka dalam sebuah variable, lalu lanjut ke step 2.
// 2. Dilakukan pengecekan dengan membagi angka tersebut dengan 2,
//    jika hasil baginya adalah 0, tampilkan "Angka tersebut bukan bilangan prima",
//    jika tidak lanjut step 3.
// 3. Dilakukan pengecekan dengan membagi angka tersebut dengan 1 dan bilangang itu sendiri, 
//    jika sisa hasil bagi keduanya adalah 0, lanjut step 4,
//    jika tidak tampilkan "Angka tersebut bukan bilangan prima".
// 4. Dilakukan pengecekkan kembali, apakah bilangan tersebut jika dibagi dengan 3, 5, 7, dan 9 menghasilkan sisa hasil bagi sama dengan 0,
//    jika iya, tampilkan "Angka tersebut bukan bilangan prima".
//    Dan jika tidak, tampilkan "Angka terbut adalah bilangan prima".
​
// Tulis pseudocode di sini
//  STORE "num" with any number
//  CALCULATE "num" mod 2
//  IF calculate result EQUALS TO 0
//      DISPLAY "Angka tersebut bukan bilangan prima"
//  END IF
//  CALCULATE "num" mod 1 AND "num" mod "num"
//  IF both result NOT EQUALS TO 0  
//      DISPLAY "Angka tersebut bukan bilangan prima"
//  END IF
//  CALCULATE "num" mod 3 AND "num" mod 5 AND "num" mod 7 AND "num" mod 9
//  IF all result EQUALS TO 0
//      DISPLAY "Angka tersebut bukan bilangna prima"
//  ELSE
//      DISPLAY "Angka terbut adalah bilangan prima"
//  END IF