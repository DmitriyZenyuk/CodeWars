function isIsogram(str){
    const arr = str.toUpperCase().split('');
    for (i = 0; i < arr.length; i += 1) {
        if (arr.includes(arr[i], i + 1)) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('aba'));
