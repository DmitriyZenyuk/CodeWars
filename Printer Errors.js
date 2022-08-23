function printerError(s) {
    const arr = s.toUpperCase().split('');
    let err = arr.filter(item => item.codePointAt(0) > 77).length;
    return `${err}/${arr.length}`;
}

console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'));