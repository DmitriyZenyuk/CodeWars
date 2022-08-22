function isPangram(string){
    let arr = [];
    let result;

    for (i = 0; i < string.length; i += 1){
        if (!(string[i] ===' ')) {
            arr.push(string[i].toUpperCase().codePointAt());           
        };
    };

    for (j = 65; j <= 90; j += 1){
        if (!arr.includes(j)) {
            return result = false;
        }
    };

    return result = true;    
}

console.log(isPangram('The quick brown fox jumps over the lazy dog'));
console.log(isPangram('This is not a pangram'));