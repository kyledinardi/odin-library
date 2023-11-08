const myLibrary = [];
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
const table = document.querySelector('tbody');
const dialogBox = document.querySelector('dialog');
const newBook = document.querySelector('.new-book');
const confirmBtn = document.querySelector('#confirm');
const cancelBtn = document.querySelector('#cancel');

newBook.addEventListener('click', () => {
  dialogBox.showModal()
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  buildTable();
  dialogBox.close();
});

cancelBtn.addEventListener('click', () => {
  dialogBox.close();
})

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  let title = inputs[0].value;
  let author = inputs[1].value;
  let pages = inputs[2].value;
  let read = inputs[3].checked;
  myLibrary.push(new Book(title, author, pages, read));
  for(let i = 0; i < 3; i++) {
    inputs[i].value = '';
  }
  inputs[3].checked = false;
}

function buildTable() {
  const previousRows = document.querySelectorAll('tbody tr');
  previousRows.forEach((e) => e.remove());
  myLibrary.forEach((e) => {
    const newRow = document.createElement('tr');
    const deleteBtn = document.createElement('button');
    let cells = [];
    newRow.setAttribute('data-index', myLibrary.indexOf(e));
    deleteBtn.setAttribute('data-index', myLibrary.indexOf(e));
    deleteBtn.textContent = 'Delete';
    for(let i = 0; i < 5; i++) {
      cells[i] =  document.createElement('td');
    }
    cells[0].textContent = e.title;
    cells[1].textContent = e.author;
    cells[2].textContent = e.pages;
    cells[3].appendChild(createReadCheckbox(e.read));
    cells[4].appendChild(deleteBtn);
    for(let i = 0; i < 5; i++) {
      newRow.appendChild(cells[i]);
    }
    table.appendChild(newRow);
  });
  handleDeleteBtns();
}

function handleDeleteBtns() {
  let deleteBtns = document.querySelectorAll('button[data-index]');
  let rows = document.querySelectorAll('tbody tr');
  deleteBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      rows.forEach((row) => {
        let i = row.getAttribute('data-index');
        if(i === e.target.getAttribute('data-index')) {
          myLibrary.splice(i, 1);
          row.remove();
        }
      });
      buildTable();
    });
  });
}

function createReadCheckbox(read) {
  const readBox = document.createElement('input');
  readBox.setAttribute('type', 'checkbox');
  if(read){
    readBox.setAttribute('checked', '');
  }
  return readBox;
}