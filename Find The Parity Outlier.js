function findOutlier (integers) {
    const arr = integers;
    let odd;
    let even;
    let oddCount = 0;
    let evenCount = 0;

    arr.forEach((item) => {
        // console.log(item);
        if (item % 2 === 0) {
            odd = item;
            oddCount += 1;
            // console.log('odd = ',odd, 'oddCount = ',oddCount)
        } else {
            even = item;
            evenCount += 1;
            // console.log('even = ', even, 'evenCount = ', evenCount);
        }
    })
    return (oddCount > evenCount ? even : odd);
}

console.log(findOutlier([0, 1, 2]));
console.log(findOutlier([1, 2, 3]));
console.log(findOutlier([2,6,8,10,3]));
