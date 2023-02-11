//read button
const isRead = document.querySelector(".is-read");
isRead.addEventListener("click", () => {
    isRead.classList.toggle("read");
})

//add card
const library = document.querySelector(".library");
// const addBtn = document.querySelector(".add");
// addBtn.addEventListener("click", () => {
//     const newCard = document.createElement('div');
//     newCard.classList.add("card");
//     library.appendChild(newCard);
// })

//pop-up form
const newForm = document.querySelector(".new-form");
const addBtn = document.querySelector(".add");
addBtn.addEventListener("click", () => {
    newForm.style.zIndex = "2";
    newForm.style.border = "5px solid rgb(0, 0, 129, .5)";
    newForm.style.boxShadow = "10px 5px 5px rgb(0, 0, 129, .5)";
    newForm.style.display = "grid";
})

//close pop-up
const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
    newForm.style.display = "none";
})

//library
let myLibrary = [];

//submit button
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const theForm = document.querySelector("#the-form");
theForm.addEventListener("submit", e => {
    e.preventDefault();
    const book3 = new Book(theForm.title.value, theForm.author.value, theForm.pages.value);
    myLibrary.push(book3);
    removeAllChildNodes(library);
    addBookToLibrary();
    newForm.title.value = "";
    newForm.author.value = "";
    newForm.pages.value = "";
    newForm.style.display = "none";
})

//book constructor
function Book(title, author, pages,) {
    this.title = title
    this.author = author
    this.pages = pages
}

// const book1 = new Book("title1", "author1", 111);
// const book2 = new Book("crazy", "King", 234);
// myLibrary.push(book1, book2);
// console.table(myLibrary);

//add books to display
function addBookToLibrary () {
        let libraryLength = myLibrary.length;
            myLibrary.forEach(book => {
            const newCard = document.createElement('div');
            newCard.classList.add("card");
            const newTitle = document.createElement('h4');
            newTitle.textContent = `${book.title}`;
            const newAuthor = document.createElement('h6');
            newAuthor.textContent = `by ${book.author}`;
            const newPages = document.createElement('p');
            newPages.textContent = `${book.pages}`;
            const newButton = document.createElement('button');
            newButton.textContent = `Read`;
            newButton.classList.add("is-read");
            newButton.addEventListener("click", () => {
                newButton.classList.toggle("read");
            })
            const closeButton = document.createElement('div');
            closeButton.classList.add("close");
            closeButton.style.position = "absolute";
            closeButton.style.right = "5px";
            closeButton.textContent = `X`;
            //remove book from library/close card
            closeButton.addEventListener("click", () => {
                myLibrary.splice(myLibrary.indexOf(book),1);
                removeAllChildNodes(library);
                addBookToLibrary();
            })
            library.appendChild(newCard);
            newCard.appendChild(closeButton);
            newCard.appendChild(newTitle);
            newCard.appendChild(newAuthor);
            newCard.appendChild(newPages);
            newCard.appendChild(newButton);

            newCard.setAttribute("id", myLibrary.indexOf(book));
           
})}
addBookToLibrary();
const author = document.getElementById('author');
const title = document.getElementById('title');
const titleError = document.querySelector('.title-error');

title.addEventListener('input', e => {
    if (title.validity.tooShort) {
        title.setCustomValidity('Too short!');
    } else {
        title.setCustomValidity("");
    }
});

author.addEventListener('input', e => {
    if (author.validity.valueMissing) {
        author.setCustomValidity('Someone wrote it!');
    } else if (title.validity.valid) {
        author.setCustomValidity(''); 
    }})
