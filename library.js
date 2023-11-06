const libraryDiv = document.querySelector('.library')
const myLibrary = [];
const input = document.querySelectorAll('input');
const form = document.querySelector('#new-book');
const table = document.querySelector('tbody')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  addBookToTable();
  libraryDiv.style.display = 'block';
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
  myLibrary.push(new Book(title, author, pages, read))
  for(let i = 0; i < 3; i++) {
    input[i].value = ''
  }
  input[3].checked = false;
}

function addBookToTable() {
  let book = myLibrary[myLibrary.length - 1];
  const row = document.createElement('tr');
  let cells = []  
  for(i = 0; i < 4; i++) {
    cells[i] = document.createElement('td');
  }
  cells[0].textContent = book.title;
  cells[1].textContent = book.author;
  cells[2].textContent = book.pages;
  cells[3].textContent = book.read ? 'Yes' : 'No';
  for(i = 0; i < 4; i++) {
    row.appendChild(cells[i]);
  }
  table.appendChild(row);
}