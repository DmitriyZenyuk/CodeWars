function spinWords(string) {
    let arr = string.split(' ');    
    const adjArr = arr.map(function (item) {
        if (item.length > 4) {
            let adjItem = '';
            for (i = item.length - 1; i >= 0; i -= 1) {
                adjItem += item[i];        
            };            
            console.log('adjItem: ', adjItem);
            return adjItem;
            
        };
        return item;
    });
    return adjArr.join(' ');
};

console.log(spinWords('Hey fellow warriors'));