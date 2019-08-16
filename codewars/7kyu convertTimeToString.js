function sec(seconds){
    var detik = (seconds%60);
    var menit = (Math.round((seconds/60)))%60;
    var jam = Math.round((Math.round((seconds/60)))/60)%24;
    var hari = Math.round(Math.round((Math.round((seconds/60)))/60)/24);
    return hari + ' day, ' + jam + ' hour, ' + menit + ' min, ' + detik + ' second';
}

console.log(sec(90061)); // 1 1 1 1 (1 day, 1 hour, 1 min and 1 seconds)
console.log(sec(93784)); // 1 2 3 4 (1 day, 2 hours, 3 mins, 4 seconds)