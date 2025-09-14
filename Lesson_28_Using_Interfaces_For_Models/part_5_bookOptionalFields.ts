interface BookWithOptionalFields {
    title: string;
    author: string;
    publishedYear?: number; // This property is optional
    genre?: string; // This property is also optional
}
const partialBook: BookWithOptionalFields = {
    title: "Learn TypeScript",
    author: "Jane Roe",
};
