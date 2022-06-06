function highlight(table) {
  for (let tr of table.rows) {
    let age = tr.cells[1].textContent;
    let gender = tr.cells[2].textContent;
    let status = tr.cells[3].dataset.available;

    if (status === 'true') {
      tr.classList.add('available');
    } else if (status === 'false') {
      tr.classList.add('unavailable');
    } else if (!status) {
      tr.setAttribute('hidden', 'hidden');
    }

    if (age < 18) {
      tr.style.textDecoration = 'line-through';
    }

    let result = (gender === 'm') ? tr.classList.add('male') : tr.classList.add('female');
  }
}
