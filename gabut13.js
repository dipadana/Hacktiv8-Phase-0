// Century From The Year
function century(year) {
    if(year <= 100){
        return 1;
    }
    else{
        return Math.ceil((year/100));
    }
}