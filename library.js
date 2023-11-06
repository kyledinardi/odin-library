const myLibrary = [];
const input = document.querySelectorAll('input');
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
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
}