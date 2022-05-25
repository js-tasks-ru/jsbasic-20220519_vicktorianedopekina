function ucFirst(str) {
  if (str == '') {
    return str;
  }

  let firstLetter = str[0].toUpperCase();
  str = firstLetter + str.substr(1);
  return str;
}
console.log(ucFirst(''));
