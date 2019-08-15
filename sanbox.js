var string = 'Walaupun regex banyak mengandung simbol, tapi tidak serumit seperti !@#%^%#$*( , ^%&*!!^& dan !#*#$&*@%#';
console.log(string.match(/[abcdefghijklmnopqrstuvwxyz0123456789]+/gi));
//menampilkan ["Walaupun", "regex", "banyak", "mengandung", "simbol", "tapi", "tidak", "serumit", "seperti", "dan"]

var x = [{name:'dipa'},{name:'dinar'},{name:'kitase'}];

console.log(x[2].name)


var arr  = [];
arr[0] = ['makan','muinum']
console.log(arr)


var arr = {makan:[{nasi:'putih',harga:100},{bakso:'ayam',harga: 200}],
            minum: ['air','teh']};

console.log(arr.makan[1].bakso)

var numberPattern = /\d+/g;

console.log('something102asdfkj1948948'.match( numberPattern ))

var value = '675-805-714';
var numberPattern = /\d+/g;
value = value.match( numberPattern ).join([]);
console.log(typeof Number(value))

console.log('the-stel_ +????warl'.split(/[- +?_]+/))