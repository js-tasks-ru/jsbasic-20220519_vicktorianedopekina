function showSalary(users, age) {
  let result = users
    .filter((item) => item.age <= age)
    .map((item) => item.name + ', ' + item.balance)
    .slice([0])
    .join('\n');

  return result;
}