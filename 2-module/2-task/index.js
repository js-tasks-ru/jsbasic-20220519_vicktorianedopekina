function isEmpty(obj) {
  for (let key in obj) {

    if (Object.keys(key) !== 'undefined') {
      return false;
    }

    if (Object.length(key) < 1) {
      return true;
    }
  }

  return true;
}
