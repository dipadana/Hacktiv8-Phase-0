function expressionMatter(a, b, c) {
    var data = [a+b+c,(a+b)+c,a+(b+c),a*b*c,(a*b)*c,a*(b*c),a+b*c,a*b+c,(a+b)*c,a*(b+c)].sort(function(value1, value2) { return value2 - value1 });
    return(data[0]);
}

console.log(expressionMatter(2, 1, 2)) // 6
console.log(expressionMatter(10, 5, 6)) //300