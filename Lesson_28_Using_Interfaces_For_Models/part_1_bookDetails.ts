const book1: Book = {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Dystopian",
};

const book2: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Tragedy",
};
function printBookDetails(book: Book) {
    console.log(`Title: ${book.title}, Author: ${book.author}, Year: ${book.publishedYear}, Genre: ${book.genre}`);
}

printBookDetails(book1);
printBookDetails(book2);
