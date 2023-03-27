const check = document.getElementById("read-checkbox");
const titleInp = document.getElementById("title");
const authorInp = document.getElementById("author");
const form = document.getElementById("form");
const btn = document.getElementById("submit");
const tbody = document.getElementById("table-body");

class Book {
  constructor(title, author, read, id) {
    (this.title = title),
      (this.author = author),
      (this.read = read),
      (this.id = id);
  }
}

class Library {
  constructor() {
    (this.bookCount = 0), (this.books = []);
  }

  markRead(checkbox, id) {
    this.books.forEach((book) => {
      if (book.id == id) {
        let index = this.books.map((e) => e.id).indexOf(id);
        books[index].read = true;
      }
    });
  }

  addBook(title, author, read) {
    let book = new Book(title, author, read);
    //next version of code would be to check if number already exists
    let newRow = document.createElement("tr");

    for (const prop in book) {
      let newData = document.createElement("td");

      if (prop == "read") {
        let inp = document.createElement("input");
        inp.type = "checkbox";
        inp.name = "read";
        if (book[prop] == true) {
          inp.checked = true;
          inp.disabled = true;
        } else {
          inp.addEventListener("click", (e) => {
            inp.checked = true;
            inp.disabled = true;
            book[prop] = true;
          });
        }
        newData.appendChild(inp);
      } else {
        newData.textContent = book[prop];
      }
      newRow.appendChild(newData);
    }
    let delTD = document.createElement("td");
    let del = document.createElement("button");
    del.type = "button";
    del.class = "delete";
    del.textContent = "Delete";

    delTD.appendChild(del);
    newRow.appendChild(delTD);
    tbody.appendChild(newRow);
    library.bookCount++;
    library.books.push(book);
    titleInp.value = "";
    authorInp.value = "";
    check.checked = false;
    book.id = Math.floor(Math.random() * 1000000000);
    del.addEventListener("click", (e) => {
      e.preventDefault();
      library.removeBook(book.id, newRow);
    });
    console.log(book.id);
  }

  removeBook(bookId, newRow) {
    console.log(bookId);
    console.log(library.books);
    library.books = library.books.filter((e) => e.id != bookId);
    console.log(library.books);
    library.bookCount--;
    newRow.remove();
  }
}
let library = new Library();
console.log(btn);
console.log(library.books);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (library.books == 0) {
  }
  library.addBook(titleInp.value, authorInp.value, check.checked);
});
