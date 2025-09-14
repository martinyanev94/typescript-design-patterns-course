interface EducationalBook extends Book {
    subject: string;
    level: string;
}
const book3: EducationalBook = {
    title: "Understanding TypeScript",
    author: "John Doe",
    publishedYear: 2023,
    genre: "Programming",
    subject: "TypeScript",
    level: "Intermediate",
};
