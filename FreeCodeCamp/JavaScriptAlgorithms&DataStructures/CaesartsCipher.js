function rot13(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i).match(/[A-M]/)) {
      newStr.push(String.fromCharCode(str.charCodeAt(i) + 13));
    } else if (str.charAt(i).match(/[N-Z]/)) {
      newStr.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      newStr.push(str.charAt(i));
    }
  }
  console.log(newStr.join(''));
  return newStr.join('');
}

rot13("SERR PBQR PNZC");