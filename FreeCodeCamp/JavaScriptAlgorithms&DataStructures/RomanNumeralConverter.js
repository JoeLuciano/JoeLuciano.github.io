function convertToRoman(num) {
    let str = [];
    let tempNum = num;
    let romanNumbers = Object.keys(numToRoman);
    for (let i = romanNumbers.length-1; i >= 0; i--) {
        let romanInt = parseInt(romanNumbers[i]);
        if (tempNum >= romanInt) {
            str.push(numToRoman[romanNumbers[i]]);
            tempNum -= romanInt;
            i++;
        } else {
            for (let j = i-1; j >= 0; j--) {
                let romanInt2 = parseInt(romanNumbers[j]);
                if ( romanNumbers.every((num) => num != romanInt - romanInt2)) {
                    if (tempNum >= romanInt - romanInt2) {
                        str.push(numToRoman[romanNumbers[j]]);
                        str.push(numToRoman[romanNumbers[i]]);
                        tempNum -= romanInt - romanInt2;
                    }
                }
            }
        }
    }
    return str.join("");
}

let numToRoman = {
    1: 'I',
    5: 'V',
    10: 'X',
    50: 'L',
    100: 'C',
    500: 'D',
    1000: 'M'
}

convertToRoman(36);