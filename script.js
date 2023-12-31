let myLibrary = [];

let addButton = document.querySelector("#add-button");
let newBookForm = document.querySelector("#new-book-form");
let libraryEl = document.querySelector("#library");

addButton.addEventListener('click', () => {
    newBookForm.style.display = "block";
});

newBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
})

// book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// on and off switch for toggle read button
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function toggleRead(index) {
    myLibrary[index].toggleRead();
    render();
}

// renders book cards from users form input
function render() {
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.setAttribute("class", "book-card");
        bookEl.innerHTML = `
            <div class = "card-header">
                <h3 class = "title">${book.title}</h3>
                <h5 class = "author">${book.author}</h5>
            </div>
            <div class = "card-body">
                <p class = "pages-read">${book.pages} pages </p>
                <p class = "read-status"> ${book.read ? "Read" : "Not Read Yet"}</p>
                <div class = "card-buttons">
                    <button class = "remove-button" onclick="removeBook(${i})">Remove</button>
                    <button class = "toggle-read-button" onclick="toggleRead(${i})">Toggle Read</button>
                </div>
            </div>`;
        libraryEl.appendChild(bookEl);
    }
}

// removes book cards
function removeBook(index) {
    myLibrary.splice(index, 1);
    render();
}

// adds book to the library
function addBookToLibrary() {
    let title = document.querySelector("#title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}




