let myLibrary = [];

let addButton = document.querySelector("#add-button");
let newBookForm = document.querySelector("#new-book-form");
let libraryEl = document.querySelector("library");

addButton.addEventListener('click', () => {
    newBookForm.style.display = "block";
});

newBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
})


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `<p>${book.title}</p>`
        libraryEl.appendChild(bookEl);
    }

}

function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}




