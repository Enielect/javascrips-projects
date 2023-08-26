//implementing the fucking js!!!!!!!!
//lfggggggg

//Book CLass

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI CLass
// const books = [
//     {
//         title: 'modern physics',
//         author: 'eniola',
//         isbn: '38493'
//     },
//     {
//         title: 'understanding chemistry',
//         author: 'ukeme',
//         isbn: '39493'
//     }
// ]

// const bookss = [];

//storage!!!!!!

// 

class UI {

    static displayBooks() {
        Store.getBooks().forEach(book => UI.addBookToList(book));
    }

    static addBookToList(book) {
        const bookList = document.querySelector('.book-list');
        let row = document.createElement('tr');

        row.innerHTML =
            `
                 <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><button class='cancel-btn'><i></i></button></td>
        `;
        bookList.appendChild(row);
    }

    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById("author").value = '';
        document.getElementById("isbn").value = '';
    }

    static deleteBook(ele) {
        if (ele.classList.contains('cancel-btn')) {
            ele.parentElement.parentElement.remove();
        }
    }
}

class Store {
    static getBooks() {
        let books;
        if (localStorage.getItem('book-list') == null) {
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem('book-list'));
        }
        return books;
    }

    static removeBook(isbn) {
        let book = JSON.parse(localStorage.getItem('book-list'));
        book.forEach(ele => {
            if (ele.isbn == isbn) book.splice(ele, 1);
        });
        localStorage.setItem('book-list', JSON.stringify(book));
    }

    static addBook(book) {
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('book-list', JSON.stringify(books));
    }
}



//functionality on submit

document.querySelector('#book-info').addEventListener('submit', (event) => {
    event.preventDefault();
    //validation of form

    const alert = document.createElement('div');
    alert.appendChild(document.createTextNode('Fill in all inputs'));
    document.querySelector('.container').insertBefore(alert, document.getElementById('book-info'));
    if (title.value == '' || author.value == '' || isbn.value == '') {
        //add an alert
        alert.classList.add('alert');
        setTimeout(() => alert.remove(), 3000);
    } else {
        let title = document.getElementById('title');
        let author = document.getElementById('author');
        let isbn = document.getElementById('isbn');

        const book = new Book(title.value, author.value, isbn.value);
        UI.addBookToList(book);
        Store.addBook(book);
        UI.clearFields();

        alert.classList.add('successful');
        alert.textContent = 'Book Sucessfully Added'
        setTimeout(() => alert.remove(), 2000);
    }

})


window.addEventListener('DOMContentLoaded', UI.displayBooks)

//deleting lists

document.querySelector('.book-list-section').addEventListener('click', (event) => {
    UI.deleteBook(event.target);
    Store.removeBook(event.target.parentElement.previousElementSibling.textContent);
})

//storage part!!!!!!!!












//Store Class
