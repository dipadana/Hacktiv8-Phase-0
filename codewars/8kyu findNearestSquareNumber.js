function nearestSq(n){
    return Math.round(Math.sqrt(n))**2
}

console.log(nearestSq(10)) // 9
console.log(nearestSq(1)) // 1
console.log(nearestSq(2)) // 2
console.log(nearestSq(111)) // 121
console.log(nearestSq(9999)) // 10000