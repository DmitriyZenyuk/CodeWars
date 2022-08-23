function getSum( a,b ) {
    let sum = 0;

    if (a === b) {
        return a;
    } else if (a < b) {
        for (i = a; i <= b; i += 1) {
            sum += i;
        }
        return sum;
    } else {
        for (i = b; i <= a; i += 1) {
            sum += i;
        }
        return sum;
    }
}

console.log(getSum(0, -1));