const myLibrary = [];
const input = document.querySelectorAll('input');
const form = document.querySelector('#new-book');
const table = document.querySelector('tbody')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  buildTable();
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = input[0].value;
  let author = input[1].value;
  let pages = input[2].value;
  let read = input[3].checked;
  myLibrary.push(new Book(title, author, pages, read));
  for(let i = 0; i < 3; i++) {
    input[i].value = '';
  }
  input[3].checked = false;
}

function buildTable() {
  const previousRows = document.querySelectorAll('tbody tr');
  previousRows.forEach((e) => e.remove());
  myLibrary.forEach((e) => {
    const newRow = document.createElement('tr');
    let cells = [];
    for(let i = 0; i < 4; i++) {
      cells[i] =  document.createElement('td');
    }
    cells[0].textContent = e.title;
    cells[1].textContent = e.author;
    cells[2].textContent = e.pages;
    cells[3].textContent = e.read ? 'Yes' : 'No';
    for(let i = 0; i < 4; i++) {
      newRow.appendChild(cells[i]);
    }
    table.appendChild(newRow);
  });
}