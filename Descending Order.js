function descendingOrder(n){
    let arr = n.toString().split('').sort().reverse();
    return Number(arr.join(''));
}

console.log(descendingOrder(4537278484858));