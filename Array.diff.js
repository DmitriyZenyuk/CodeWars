function arrayDiff(a, b) {
    let array = [];
    for (i = 0; i < a.length; i += 1) {
        if (!b.includes(a[i])) {
            array.push(a[i]);
        }
    }
    return array;
}
    
console.log(arrayDiff([1,2,3], [1,2]));