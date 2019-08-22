function sec(seconds){
    var jam = Math.floor(seconds/3600);
    // console.log(jam)
    var menit = Math.floor((seconds%3600)/60);
    // console.log(menit)
    var detik = (seconds%3600)%60
    // console.log(detik)
    // var menit = (Math.round((seconds/60)))%60;
    // var jam = Math.round((Math.round((seconds/60)))/60);
    // var hari = Math.round(Math.round((Math.round((seconds/60)))/60)/24);
    if(seconds > 359999){
        return '99:59:59'
    }
    if(jam <= 9){
        var jam = '0' + jam
    }
    if(menit <= 9){
        var menit = '0' + menit
    }
    if(detik <= 9){
        var detik = '0' + detik
    }
    return jam + ':' + menit + ':' + detik;
}

console.log(sec(3660)); // 01:01:00
console.log(sec(93784)); // 26:03:04
console.log(sec(359999)); // 99:59:59