interface Library {
    books: Book[];
    addBook(book: Book): void;
}

class MyLibrary implements Library {
    books: Book[] = [];

    addBook(book: Book) {
        this.books.push(book);
    }
}
const library = new MyLibrary();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
