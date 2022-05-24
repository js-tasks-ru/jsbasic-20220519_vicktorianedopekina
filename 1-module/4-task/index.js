function checkSpam(str) {
  string = str.toLowerCase();

  if (string.includes('1xbet') || string.includes('xxx')) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam('1XBET'));
