function palindrome(str) {
  let newStr = [];
  str = str.replace(/[^a-z|0-9]/ig, '');
  for(let i = str.length-1; i >= 0; i--) {
    newStr.push(str.charAt(i));
  }
  console.log(str, newStr.join(""));
  return newStr.join("").toLowerCase() == str.toLowerCase();
}



palindrome("eye");