var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[abcdefghijklmnopqrstuvwxyz0123456789]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]