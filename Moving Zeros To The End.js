function moveZeros(arr) {
    let zeroArr = [];

    while (arr.includes(0)) {
        for (i = 0; i < arr.length; i += 1) {
            if (arr[i] === 0) {
                arr.splice(i, 1);
                zeroArr.push(0);
            };
        };
    };
    
    return arr.concat(zeroArr);
};

console.log(moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0]));