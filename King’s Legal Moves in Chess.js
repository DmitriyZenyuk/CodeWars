function kingAllPossibleMoves(startingPos, occupiedPos) {
    let array = [];
    
    wordKingPos = startingPos.codePointAt(0);
    digitKingPos = Number(startingPos[1]);
    
    for (i = wordKingPos - 1; i <= wordKingPos + 1; i += 1) {
        for (j = digitKingPos - 1; j <= digitKingPos + 1; j += 1) {
            let tempSlot;
            if (!((j < 1 || j > 8) || (i < 65 || i > 72))) {
                tempSlot = String.fromCodePoint(i) + j;
            }

            if (tempSlot != startingPos && !occupiedPos.includes(tempSlot) && tempSlot != undefined) {
                array.push(tempSlot);
            }        
        }
    }
    return array.sort();
}

console.log(kingAllPossibleMoves('A1', ['B1','B2']));
