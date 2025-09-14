interface Book {
    title: string;
    author: string;
    pages: number;
}

type BookKeys = keyof Book; // 'title' | 'author' | 'pages'

const printBookKey = (key: BookKeys) => {
    console.log(`This is a property of Book: ${key}`);
};

printBookKey('title'); // Works
// printBookKey('isbn'); // Error: Argument of type '"isbn"' is not assignable to parameter of type 'BookKeys'.
