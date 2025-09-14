interface Book {
    title: string;
    author: string;
    pages: number;
}

type BookKeys = keyof Book; // This would resolve to 'title' | 'author' | 'pages'

const printBookKey = (key: BookKeys) => {
    console.log(`This is a property of Book: ${key}`);
};

printBookKey('title'); // This works just fine
// printBookKey('isbn'); // Uncommenting this line will cause a TypeScript error
