function sumSalary(salaries) {
  let sum = 0;

  for (let key in salaries) {
    let typeOfKey = Number.isFinite(salaries[key]);
    if (typeOfKey === true) {
      sum += salaries[key];
    }
  }

  return sum;
}

