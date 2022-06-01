function camelize(str) {
  let wordArr = str.split('-');

  for (let i = 1; i < wordArr.length; i++) {
    wordArr[i] = wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
  }

  return wordArr.join('');
}

