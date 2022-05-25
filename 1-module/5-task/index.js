function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.substring(0, [maxlength - 1]) + '…';
    console.log(str);
  }

  return str;
}

console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 10));


