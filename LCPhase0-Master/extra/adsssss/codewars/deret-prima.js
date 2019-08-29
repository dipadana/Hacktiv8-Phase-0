function getPrime(num) {

    var number = [], i, j, primes = [];
    for (var i = 2; i <= num; ++i) {
        if (!number[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (var j = i; j <= num; j += i) {
                number[j] = true;
            }
        }
    }
    return primes;
}

console.log(getPrime(10)); // [ 2, 3, 5, 7 ]
console.log(getPrime(23)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]
console.log(getPrime(44)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43 ]
console.log(getPrime(1)); // []
console.log(getPrime(0));