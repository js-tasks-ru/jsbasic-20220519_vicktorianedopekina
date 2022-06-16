/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  #rows;
  #table = document.createElement('table');

  constructor(rows) {
    this.#rows = rows;
    this.render();
  }

  render() {
    this.elem.innerHTML = this.#makeTable();

    this.#buttonRemove();
  }

  get elem() {
    return this.#table;
  }

  #buttonRemove() {
    const button = Array.from(this.#table.querySelectorAll('button'));

    button.forEach((el) => {
      el.addEventListener('click', (event) => {
        let target = event.target;

        target.closest('tr').remove();
      }, { once: true });
    });
  }

  #makeTable() {
    return `
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody> 
      ${this.#rows.map(element => `
        <tr>
          <td>${element.name}</td>
          <td>${element.age}</td>
          <td>${element.salary}</td>
          <td>${element.city}</td>
          <td><button data-component="button">[X]</button></td>
        </tr>
      `).join('')}
    </tbody>
  `;
  }
}
