function getMinMax(str) {
  let arr = str
    .split(' ')
    .filter((item) => parseInt(item));

  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let result = {
    min,
    max
  };

  return result;
}