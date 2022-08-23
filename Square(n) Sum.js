function squareSum(numbers){
    let sum = 0;
    for (const item of numbers) {
        sum += item ** 2;
    }
    return sum;
}

console.log(squareSum([1, 2, 2]));